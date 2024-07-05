import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { fetchOrderHistory } from '@/api'; // API 호출 함수 가져오기

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrderHistory = async () => {
      try {
        const data = await fetchOrderHistory();
        setOrderHistory(data); // API로부터 받은 주문 내역 데이터 설정
      } catch (error) {
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
        <Box width="100%" p={6} border="1px solid" borderColor="main" borderRadius="3xl">
          {orderHistory.length > 0 ? (
            orderHistory.map((order: any) => (
              <Box key={order.id} width="100%" p={10} mb={3}>
                <Flex alignItems="center" direction={['column', 'row']}>
                  <Box flex="1">
                    <Text fontSize="1.8rem">주문 번호: {order.id}</Text>
                    <Text fontSize="1.8rem">주문 일시: {new Date(order.createdAt).toLocaleString()}</Text>
                    <Text fontSize="2rem" fontWeight="900">{order.accommodationName}</Text>
                    <Divider my={6} borderColor="main" />
                    <Text fontSize="1.2rem">룸 타입: {order.roomType}</Text>
                    <Text fontSize="1.2rem">최대 인원: {order.maxGuest}인</Text>
                    <Divider my={6} borderColor="main" />
                    <Text fontSize="1.2rem">가격: {order.roomPrice.toLocaleString()}원</Text>
                    <Text fontSize="1.2rem">추가 요금: {order.extraPrice.toLocaleString()}원</Text>
                  </Box>
                </Flex>
              </Box>
            ))
          ) : (
            <Text>주문 내역이 없습니다.</Text>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default OrderHistory;
