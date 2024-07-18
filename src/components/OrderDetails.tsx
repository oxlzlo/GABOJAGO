import { OrderDetailsProps } from '@/lib/types/order';
import { Box, Flex, Text } from '@chakra-ui/react';

const OrderDetails = ({ selectedCartRooms, selectedBookingRoom }: OrderDetailsProps) => {
  const hasSelectedItems = selectedCartRooms && selectedCartRooms.length > 0;

  if (!selectedBookingRoom && !hasSelectedItems) {
    return <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>;
  }

  return (
    <>
      <Flex>
        <Box width="100%" display="flex" flexDirection="column" gap="1.5rem">
          {hasSelectedItems
            ? selectedCartRooms.map((selectedCartRoom) => (
                <Box
                  key={selectedCartRoom.cart_item_id}
                  width="100%"
                  padding="2.5rem"
                  border="1px solid"
                  borderColor="grayLight"
                  borderRadius="2rem">
                  <Text fontSize="3rem" fontWeight="900">
                    {selectedCartRoom.room.roomTypeName}
                  </Text>
                  <Text fontSize="1.5rem">{selectedCartRoom.room.roomType}</Text>
                  <Flex paddingY="5rem" gap="2rem">
                    <Box>
                      <Text fontSize="1.5rem">체크인</Text>
                      <Text fontSize="1.3rem">{selectedCartRoom.start_date}</Text>
                      <Text fontSize="1.3rem">15:30</Text>
                    </Box>
                    <Box>
                      <Text fontSize="1.5rem">체크아웃</Text>
                      <Text fontSize="1.3rem">{selectedCartRoom.end_date}</Text>
                      <Text fontSize="1.3rem">11:00</Text>
                    </Box>
                  </Flex>
                  <Text fontSize="1.5rem">
                    기준 {selectedCartRoom.room.roomDefaultGuest}인 / 최대 {selectedCartRoom.room.roomMaxGuest}인
                  </Text>
                  <Text fontSize="1.5rem" textAlign="right">
                    가격:{' '}
                    {`${selectedCartRoom.room.roomPrice.toLocaleString('ko-KR', {
                      style: 'decimal',
                      currency: 'KRW',
                    })}원`}
                  </Text>
                </Box>
              ))
            : selectedBookingRoom && (
                <Box
                  key={selectedBookingRoom.id}
                  width="100%"
                  padding="2.5rem"
                  border="1px solid"
                  borderColor="grayLight"
                  borderRadius="2rem">
                  <Text fontSize="3rem" fontWeight="900">
                    {selectedBookingRoom.roomTypeName}
                  </Text>
                  <Text fontSize="1.5rem">룸 타입: {selectedBookingRoom.roomType}</Text>
                  <Flex paddingY="5rem" gap="2rem">
                    <Box>
                      <Text fontSize="1.5rem">체크인</Text>
                      <Text fontSize="1.3rem">{selectedBookingRoom.startDate}</Text> {/* Use the correct startDate */}
                      <Text fontSize="1.3rem">15:30</Text>
                    </Box>
                    <Box>
                      <Text fontSize="1.5rem">체크아웃</Text>
                      <Text fontSize="1.3rem">{selectedBookingRoom.endDate}</Text> {/* Use the correct endDate */}
                      <Text fontSize="1.3rem">11:00</Text>
                    </Box>
                  </Flex>
                  <Text fontSize="1.5rem">
                    기준 {selectedBookingRoom.roomDefaultGuest}인 / 최대 {selectedBookingRoom.roomMaxGuest}인
                  </Text>
                  <Text fontSize="1.5rem" textAlign="right">
                    가격:{' '}
                    <span style={{ color: 'red' }}>
                      {`${selectedBookingRoom.roomPrice.toLocaleString('ko-KR', {
                        style: 'decimal',
                        currency: 'KRW',
                      })}원`}
                    </span>
                  </Text>
                  <Text fontSize="1.5rem" textAlign="right">
                    추가 요금:
                    {`${selectedBookingRoom.roomExtraPrice.toLocaleString('ko-KR', {
                      style: 'decimal',
                      currency: 'KRW',
                    })}원`}
                  </Text>
                </Box>
              )}
          <Box>
            <Text my={10} textAlign="left" fontWeight="900" fontSize="3rem">
              결제 금액
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="2rem">
              상품 금액
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default OrderDetails;
