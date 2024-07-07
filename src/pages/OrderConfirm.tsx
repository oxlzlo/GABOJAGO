import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';
import instance from '@/api';

const OrderConfirm = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await instance.get(`/api/order/${orderId}`);
        console.log('Order Data:', response.data);
        setOrderData(response.data.data);
      } catch (error) {
        console.error('주문 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    if (orderId) {
      fetchOrderData();
    }
  }, [orderId]);

  if (!orderData) {
    return (
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Text>결제 데이터를 불러오는 중입니다...</Text>
      </Flex>
    );
  }

  const { doneRoomList, totalPrice } = orderData;

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
          {doneRoomList.map((item: any) => (
            <Box key={item.id} width="100%" p={10} mb={3}>
              <Flex alignItems="center" direction={['column', 'row']}>
                <Image src={item.imageList} />
                <Box flex="1">
                  <Text fontSize="1.8rem">
                    {item.startDate} - {item.endDate}
                  </Text>
                  <Text fontSize="2rem" fontWeight="900">
                    {item.accommodationName}
                  </Text>
                  <Divider my={6} borderColor="main" />
                  <Text fontSize="1.2rem">{item.roomType}</Text>
                  <Text fontSize="1.2rem">
                    {item.defaultGuest}인 기준, 최대 {item.maxGuest}인 이용 가능
                  </Text>
                  <Divider my={6} borderColor="main" />
                  <Text fontSize="1.2rem">{item.roomPrice.toLocaleString()}원</Text>
                  {/* <Text fontSize="1.2rem">추가 요금: {item.extraPrice.toLocaleString()}원</Text> */}
                </Box>
              </Flex>
            </Box>
          ))}
          <Box width="100%" p={10} mt={20}>
            <Flex justifyContent="right" width="100%" fontSize="2.4rem" fontWeight="700">
              <Text>총 결제금액</Text>
              <Text ml={6}>{totalPrice.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}</Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default OrderConfirm;
