import { Box, Text } from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';

const Payment = () => {
  const { roomId } = useParams();
  const location = useLocation();
  const roomData = location.state;
  console.log(roomData);

  if (!roomData) {
    return <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>;
  }

  return (
    <Box padding="14rem 3rem 7rem">
      <Text>객실 ID: {roomId}</Text>
      <Text>이름: {roomData.roomTypeName}</Text>
      <Text>유형: {roomData.roomType}</Text>
      <Text>최대 인원: {roomData.roomMaxGuest}</Text>
      <Text>기본 인원: {roomData.roomDefaultGuest}</Text>
      <Text>
        가격:{' '}
        {`${roomData.roomPrice.toLocaleString('ko-KR', {
          style: 'decimal',
          currency: 'KRW',
        })}원`}
      </Text>
      <Text>추가 요금: {roomData.roomExtraPrice}</Text>
      <Text>설명: {roomData.comment}</Text>
    </Box>
  );
};

export default Payment;
