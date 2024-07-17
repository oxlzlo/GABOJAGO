import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { OrderData } from '@/lib/types/order';
import { getOrderById } from '@/api/order/orderApi';

const OrderConfirm = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState<OrderData>({
    createdAt: '',
    doneRoomList: [],
    id: 0,
    isActive: true,
    totalPrice: 0,
    status: '',
    updatedAt: '',
  });

  useEffect(() => {
    const orderIdNumber = parseInt(orderId ?? '0', 10);
    getOrderById(orderIdNumber)
      .then((response) => {
        setOrderData(response.data.data);
      })
      .catch((error) => {
        console.error('주문 데이터를 불러오는 중 오류 발생:', error);
      });
  }, [orderId]);

  if (!orderData) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Text>결제 데이터를 불러오는 중입니다...</Text>
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
          결제 확인
        </Text>
        <Box width="100%" p={6} border="1px solid" borderColor="main" borderRadius="3xl">
          {orderData.doneRoomList.map((item) => (
            <Box key={item.id} width="100%" p={10} mb={3}>
              <Flex alignItems="center" direction={['column', 'row']}>
                <Box flex="1">
                  <Text fontSize="1.8rem">
                    {item.startDate} - {item.endDate}
                  </Text>
                  <Text fontSize="2rem" fontWeight="900">
                    {item.roomTypeName}
                  </Text>
                  <Divider my={6} borderColor="main" />
                  <Text fontSize="1.2rem">{item.roomType}</Text>
                  <Text fontSize="1.2rem">
                    {item.roomDefaultGuest}인 기준, 최대 {item.roomMaxGuest}인 이용 가능
                  </Text>
                  <Divider my={6} borderColor="main" />
                  <Text fontSize="1.2rem">{item.roomPrice.toLocaleString()}원</Text>
                </Box>
              </Flex>
            </Box>
          ))}
          <Box width="100%" p={10} mt={20}>
            <Flex justifyContent="right" width="100%" fontSize="2.4rem" fontWeight="700">
              <Text>총 결제금액</Text>
              <Text ml={6}>{orderData.totalPrice.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default OrderConfirm;
