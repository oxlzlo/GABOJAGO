import { Box, Text } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';

const Payment = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const roomData = location.state;

  return (
    <Box padding="14rem 3rem 7rem">
      <Text fontSize="md">객실 ID: {roomId}</Text>
      <Text fontSize="md">이름: {roomData.name}</Text>
      <Text fontSize="md">유형: {roomData.type}</Text>
      <Text fontSize="md">
        가격:
        {roomData.price.toLocaleString('ko-KR', {
          style: 'currency',
          currency: 'KRW',
        })}
      </Text>
      <Text fontSize="md">추가 요금: {roomData.extra_price}</Text>
      <Text fontSize="md">설명: {roomData.comment}</Text>
    </Box>
  );
};

export default Payment;
