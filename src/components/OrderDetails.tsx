import { Rooms } from '@/lib/types/accommodation';
import { selectedItems } from '@/lib/types/order';
import { Box, Flex, Text } from '@chakra-ui/react';

type OrderDetailsProps = {
  selectedItems: selectedItems[];
  selectedRoom: Rooms | undefined;
};

const OrderDetails = ({ selectedItems, selectedRoom }: OrderDetailsProps) => {
  const hasSelectedItems = selectedItems && selectedItems.length > 0;

  if (!selectedRoom && !hasSelectedItems) {
    return <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>;
  }

  const formatPrice = (price: number | undefined) => {
    if (price === undefined || price === null) return 'N/A';
    return `${price.toLocaleString('ko-KR', { style: 'decimal', currency: 'KRW' })}원`;
  };

  return (
    <>
      <Flex>
        <Box width="100%" display="flex" flexDirection="column" gap="1.5rem">
          {hasSelectedItems
            ? selectedItems.map((selectedItem) => (
                <Box
                  key={selectedItem.cart_item_id}
                  width="100%"
                  padding="2.5rem"
                  border="1px solid"
                  borderColor="grayLight"
                  borderRadius="2rem">
                  <Text fontSize="3rem" fontWeight="900">
                    {selectedItem.room.roomTypeName} {/* 숙소 이름 */}
                  </Text>
                  <Text fontSize="1.5rem">
                    {selectedItem.room.roomType} {/* 룸 타입 */}
                  </Text>
                  <Flex paddingY="5rem" gap="2rem">
                    <Box>
                      <Text fontSize="1.5rem">체크인</Text>
                      <Text fontSize="1.3rem">{selectedItem.start_date}</Text>
                      <Text fontSize="1.3rem">15:30</Text>
                    </Box>
                    <Box>
                      <Text fontSize="1.5rem">체크아웃</Text>
                      <Text fontSize="1.3rem">{selectedItem.end_date}</Text>
                      <Text fontSize="1.3rem">11:00</Text>
                    </Box>
                  </Flex>
                  <Text fontSize="1.5rem">
                    기준 {selectedItem.room.roomDefaultGuest}인 / 최대 {selectedItem.room.roomMaxGuest}인
                  </Text>
                  <Text fontSize="1.5rem" textAlign="right">
                    가격: <span style={{ color: 'red' }}>{formatPrice(selectedItem.room.roomPrice)}</span>
                  </Text>
                </Box>
              ))
            : selectedRoom && (
                <Box
                  key={selectedRoom.id}
                  width="100%"
                  padding="2.5rem"
                  border="1px solid"
                  borderColor="grayLight"
                  borderRadius="2rem">
                  <Text fontSize="3rem" fontWeight="900">
                    {selectedRoom.roomTypeName} {/* 숙소 이름 */}
                  </Text>
                  <Text fontSize="1.5rem">룸 타입: {selectedRoom.roomType}</Text>
                  <Flex paddingY="5rem" gap="2rem">
                    <Box>
                      <Text fontSize="1.5rem">체크인</Text>
                      <Text fontSize="1.3rem">{selectedRoom.start_date}</Text> {/* Use the correct startDate */}
                      <Text fontSize="1.3rem">15:30</Text>
                    </Box>
                    <Box>
                      <Text fontSize="1.5rem">체크아웃</Text>
                      <Text fontSize="1.3rem">{selectedRoom.end_date}</Text> {/* Use the correct endDate */}
                      <Text fontSize="1.3rem">11:00</Text>
                    </Box>
                  </Flex>
                  <Text fontSize="1.5rem">
                    기준 {selectedRoom.roomDefaultGuest}인 / 최대 {selectedRoom.roomMaxGuest}인
                  </Text>
                  <Text fontSize="1.5rem" textAlign="right">
                    가격: <span style={{ color: 'red' }}>{formatPrice(selectedRoom.roomPrice)}</span>
                  </Text>
                  <Text fontSize="1.5rem" textAlign="right">
                    추가 요금: <span style={{ color: 'red' }}>{formatPrice(selectedRoom.roomExtraPrice)}</span>
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
