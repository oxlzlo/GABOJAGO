import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { fetchOrderHistory } from '@/api';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrderHistory = async () => {
      try {
        const data = await fetchOrderHistory();
        console.log('Fetched order history:', data); // 주문 데이터 주문번호 역순 정렬
        const sortedData = data.data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setOrderHistory(sortedData);
      } catch (error) {
        if (error.response) {
          console.error('주문 내역 불러오기 실패 - 응답 데이터:', error.response.data);
          console.error('주문 내역 불러오기 실패 - 응답 상태 코드:', error.response.status);
        } else if (error.request) {
          console.error('주문 내역 불러오기 실패 - 요청 데이터:', error.request);
        } else {
          console.error('주문 내역 불러오기 실패 - 메시지:', error.message);
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getOrderHistory();
  }, []);

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Text>주문 내역을 불러오는 중입니다...</Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Text>주문 내역을 불러오는 중 오류가 발생했습니다.</Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" justifyContent="flex-start" alignItems="center" minHeight="calc(100vh - 80px)" p={4} px={20}>
      <Box width="100%" maxWidth="1240px" mx="auto" paddingTop="8rem">
        <Text mb={4} textAlign="left" fontWeight="900" fontSize="3rem">
          주문 내역
        </Text>
          {orderHistory.length > 0 ? (
            orderHistory.map((order: any) => (
              <Box width="100%" mb={6} p={6} border="1px solid" borderColor="main" borderRadius="3xl">
              <Box key={order.id} width="100%" p={10} mb={3}>
                <Flex alignItems="center" direction={['column', 'row']}>
                  <Box flex="1">
                    {order.doneRoomList.map((room: any) => (
                      <Box key={room.id}>
                    <Text fontSize="1.4rem">주문번호　{order.id}</Text>
                    <Text fontSize="1.4rem">주문일시　{new Date(order.createdAt).toLocaleString()}</Text>
                    <Divider my={6} borderColor="main" />
                        <Text fontSize="2.6rem" fontWeight="900">{room.accommodationName}</Text>
                        <Text fontSize="1.6rem" color="gray">{room.roomTypeName}</Text>
                        
                        <Text fontSize="1.6rem" color="gray">{room.startDate} - {room.endDate}</Text>
                        <Text fontSize="1.4rem" color="gray">체크인 15:00　체크아웃 11:30</Text>
                        {/* <Text fontSize="1.5rem">가격: {room.roomPrice.toLocaleString()}원</Text> */}
                        {/* <Text fontSize="1.5rem">추가 요금: {room.extraPrice.toLocaleString()}원</Text> */}
                      </Box>
                    ))}
                    <Divider my={4} borderColor="gray" />
                    <Text fontSize="1.8rem">총 결제금액　{order.totalPrice.toLocaleString()}원</Text>
                  </Box>
                </Flex>
              </Box>
              </Box>
            ))
          ) : (
            <Text>주문 내역이 없습니다.</Text>
          )}
        
      </Box>
    </Flex>
  );
};

export default OrderHistory;
