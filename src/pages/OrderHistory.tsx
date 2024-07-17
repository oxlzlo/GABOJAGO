import { useState, useEffect } from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { OrderData } from '@/lib/types/order';
import { getOrderHistory } from '@/api/order/orderApi';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState<OrderData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getOrderHistory()
      .then((response) => {
        const sortedData = response.data.sort(
          (a: { createdAt: string }, b: { createdAt: string }) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
        setOrderHistory(sortedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Text>주문 내역을 불러오는 중입니다...</Text>
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      minHeight="calc(100vh - 80px)"
      p={4}
      px={20}>
      <Box width="100%" maxWidth="1240px" mx="auto" paddingTop="8rem">
        <Text mb={4} textAlign="left" fontWeight="900" fontSize="3rem">
          주문 내역
        </Text>
        {orderHistory.length > 0 ? (
          orderHistory.map((order) => (
            <Box key={order.id} width="100%" mb={6} p={6} border="1px solid" borderColor="main" borderRadius="3xl">
              <Box width="100%" p={10} mb={3}>
                <Flex alignItems="center" direction={['column', 'row']}>
                  <Box flex="1">
                    {order.doneRoomList.map((room) => (
                      <Box key={room.id}>
                        <Text fontSize="1.4rem">주문번호　{order.id}</Text>
                        <Text fontSize="1.4rem">주문일시　{new Date(order.createdAt).toLocaleString()}</Text>
                        <Divider my={6} borderColor="main" />
                        <Text fontSize="2.6rem" fontWeight="900">
                          {room.roomTypeName}
                        </Text>
                        <Text fontSize="1.6rem" color="gray">
                          {room.roomTypeName}
                        </Text>
                        <Text fontSize="1.6rem" color="gray">
                          {room.startDate} - {room.endDate}
                        </Text>
                        <Text fontSize="1.4rem" color="gray">
                          체크인 15:00　체크아웃 11:30
                        </Text>
                        <Text fontSize="1.5rem">가격: {room.roomPrice.toLocaleString()}원</Text>
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
