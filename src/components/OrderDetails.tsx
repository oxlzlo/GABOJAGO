import { CombinedAccommodationRooms, Rooms } from '@/lib/types/accommodation';
import { Box, Flex, Text } from '@chakra-ui/react';

type OrderDetails = {
  selectedItems: CombinedAccommodationRooms[];
  selectedRoom: Rooms;
};

const OrderDetails = ({ selectedItems, selectedRoom }: OrderDetails) => {
  const hasSelectedItems = selectedItems && selectedItems.length > 0;

  if (!selectedRoom && !hasSelectedItems) {
    return <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>;
  }
  console.log(selectedItems);

  return (
    <>
      <Flex>
        <Box width="100%" display="flex" flexDirection="column" gap="1.5rem">
          {hasSelectedItems ? (
            selectedItems.map((selectedItem) => (
              <Box
                key={selectedItem.id}
                width="100%"
                padding="2.5rem"
                border="1px solid"
                borderColor="grayLight"
                borderRadius="2rem">
                <Text fontSize="3rem" fontWeight="900">
                  {selectedItem.name}
                </Text>
                <Text fontSize="1.5rem">
                  스위트룸 {selectedItem.type} {/* 숙소 유형 */}
                </Text>
                <Flex paddingY="5rem" gap="2rem">
                  <Box>
                    <Text fontSize="1.5rem">체크인</Text>
                    <Text fontSize="1.3rem">2024. 07. 25. (목) {selectedItem.startDate}</Text>
                    <Text fontSize="1.3rem">15:30</Text>
                  </Box>
                  <Box>
                    <Text fontSize="1.5rem">체크아웃</Text>
                    <Text fontSize="1.3rem">2024. 07. 28. (일) {selectedItem.endDate}</Text>
                    <Text fontSize="1.3rem">11:00</Text>
                  </Box>
                </Flex>
                <Text fontSize="1.5rem">
                  기준 {selectedItem.default_guest}인 / 최대 {selectedItem.max_guest}인
                </Text>
                <Text fontSize="1.5rem" textAlign="right">
                  가격:{' '}
                  {
                    <span style={{ color: 'red' }}>
                      {`${selectedItem.price.toLocaleString('ko-KR', {
                        style: 'decimal',
                        currency: 'KRW',
                      })}원`}
                    </span>
                  }
                </Text>
                <Text fontSize="1.5rem" textAlign="right">
                  추가 요금: {selectedItem.extra_price}
                </Text>
              </Box>
            ))
          ) : (
            <Box
              key={selectedRoom.id}
              width="100%"
              padding="2.5rem"
              border="1px solid"
              borderColor="grayLight"
              borderRadius="2rem">
              <Text fontSize="3rem" fontWeight="900">
                {selectedRoom.roomTypeName}
              </Text>
              <Text fontSize="1.5rem">룸 타입: {selectedRoom.roomType}</Text>
              <Flex paddingY="5rem" gap="2rem">
                <Box>
                  <Text fontSize="1.5rem">체크인</Text>
                  <Text fontSize="1.3rem">2024. 07. 25. (목) {selectedRoom.startDate}</Text>
                  <Text fontSize="1.3rem">15:30</Text>
                </Box>
                <Box>
                  <Text fontSize="1.5rem">체크아웃</Text>
                  <Text fontSize="1.3rem">2024. 07. 28. (일) {selectedRoom.endDate}</Text>
                  <Text fontSize="1.3rem">11:00</Text>
                </Box>
              </Flex>
              <Text fontSize="1.5rem">
                기준 {selectedRoom.roomDefaultGuest}인 / 최대 {selectedRoom.roomMaxGuest}인
              </Text>
              <Text fontSize="1.5rem" textAlign="right">
                가격:{' '}
                <span style={{ color: 'red' }}>
                  {`${selectedRoom.roomPrice.toLocaleString('ko-KR', {
                    style: 'decimal',
                    currency: 'KRW',
                  })}원`}
                </span>
              </Text>
              <Text fontSize="1.5rem" textAlign="right">
                추가 요금:{' '}
                <span style={{ color: 'red' }}>
                  {`${selectedRoom.roomExtraPrice.toLocaleString('ko-KR', {
                    style: 'decimal',
                    currency: 'KRW',
                  })}원`}
                </span>
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
