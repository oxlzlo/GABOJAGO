import { CombinedAccommodationRooms, Rooms } from '@/lib/types/accommodation';
import { Box, Flex, Text } from '@chakra-ui/react';

type OrderDetailsProps = {
  selectedItems: CombinedAccommodationRooms[];
};

const OrderDetails = ({ selectedItems }: OrderDetailsProps) => {
  const hasSelectedItems = selectedItems && selectedItems.length > 0;

  if (!hasSelectedItems) {
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
          {selectedItems.map((selectedItem) => (
            <Box
              key={selectedItem.id}
              width="100%"
              padding="2.5rem"
              border="1px solid"
              borderColor="grayLight"
              borderRadius="2rem">
              <Text fontSize="3rem" fontWeight="900">
                {selectedItem.roomTypeName} {/* 숙소 이름 */}
              </Text>
              <Text fontSize="1.5rem">
                {selectedItem.roomType} {/* 룸 타입 */}
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
                기준 {selectedItem.roomDefaultGuest}인 / 최대 {selectedItem.roomMaxGuest}인
              </Text>
              <Text fontSize="1.5rem" textAlign="right">
                가격:{' '}
                <span style={{ color: 'red' }}>
                  {formatPrice(selectedItem.roomPrice)}
                </span>
              </Text>
            </Box>
          ))}
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
