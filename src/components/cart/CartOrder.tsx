import { Rooms } from '@/lib/types/accommodation';
import { Box, Button, Text, Flex, Divider, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type SelectedRoomsProps = {
  selectedRooms: Rooms[];
};

const CartOrder = ({ selectedRooms }: SelectedRoomsProps) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/order', { state: { selectedRooms } });
  };

  return (
    <Box border="1px solid" borderColor="grayLight" borderRadius=".5rem" padding="3rem">
      <Text fontWeight="900" fontSize="3rem" mb={4} color="main">
        결제금액
      </Text>
      <Text fontSize="1.9rem" color="gray">
        결제할 상품을 선택해 주세요.
      </Text>
      {selectedRooms.length === 0 ? (
        <Text fontWeight="500" fontSize="1.9rem" color="gray">
          현재 선택된 상품이 없습니다.
        </Text>
      ) : (
        selectedRooms.map((selectedRoom, index) => (
          <Box key={`${selectedRoom.room.id} - ${index}`} marginY="4rem">
            <Flex alignItems="center" marginBottom="2rem">
              <Image
                src={selectedRoom.room.imageList}
                alt={selectedRoom.room.rommTypeName}
                width="8rem"
                height="8rem"
                marginRight="2.5rem"
                borderRadius=".5rem"
                border="1px solid"
                borderColor="grayLight"
              />
              <Text fontSize="2rem" fontWeight="900" mr={10}>
                {selectedRoom.room.roomTypeName}
              </Text>
              <Flex flexDirection="column" justifyContent="flex-end" alignItems="flex-end" textAlign="right" flex="1">
                <Text fontSize="1.3rem">
                  이용기간: {selectedRoom.start_date} - {selectedRoom.end_date}
                </Text>
                <Text fontSize="1.3rem">이용자 수: {selectedRoom.room.roomDefaultGuest}인</Text>
              </Flex>
            </Flex>
            <Divider borderColor="teal" />
            <Flex justifyContent="space-between" mt={2}>
              <Text fontSize="1.5rem">가격: </Text>
              <Text fontSize="1.5rem">{`${selectedRoom.room.roomPrice.toLocaleString('ko-KR', {
                style: 'decimal',
                currency: 'KRW',
              })}원`}</Text>
            </Flex>
          </Box>
        ))
      )}
      {selectedRooms.length > 0 && (
        <>
          <Divider borderColor="teal" mb={4} />
          <Flex justifyContent="space-between" fontWeight="bold">
            <Text fontWeight="900" fontSize="2rem">
              총 결제금액
            </Text>
            <span style={{ color: 'red' }}>
              <Text fontSize="1.5rem">
                {`${selectedRooms
                  .reduce((accumulator, current) => accumulator + current.room.roomPrice, 0)
                  .toLocaleString('ko-KR', { style: 'decimal', currency: 'KRW' })}원`}
              </Text>
            </span>
          </Flex>
          <Flex justifyContent="center" mt={4}>
            <Button
              onClick={handlePayment}
              padding="1.8rem"
              background="main"
              border=".1rem solid "
              borderRadius=".5rem"
              borderColor="main"
              color="white"
              fontSize="1.8rem"
              _hover={{
                background: 'primaryHover',
                color: 'white',
              }}>
              결제하기
            </Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default CartOrder;
