import { Box, Flex, Text, useTheme } from '@chakra-ui/react';

const PaymentDetail = ({ selectedItems }) => {
  const theme = useTheme();

  if (!selectedItems || selectedItems.length === 0) {
    return <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>;
  }

  return (
    <>
      <Flex>
        <Box width="100%">
          {selectedItems.map((item) => (
            <Box 
              key={item.id} 
              width="100%" 
              p={10} 
              mb={3} 
              border={`1px solid ${theme.colors.main}`}
              borderRadius="3xl">
              <Text fontSize="3rem" fontWeight="900" 
              >
                {item.name} {/* 숙소 이름 */}
              </Text>
              <Text fontSize="1.5rem">
                스위트룸 {item.type} {/* 숙소 유형 */}
              </Text>
              <Flex py="20">
                <Box>
                  <Text>체크인</Text>
                  <Text>2024. 07. 25. (목) {item.startDate}</Text>
                  <Text>15:30</Text>
                </Box>
                <Box>
                  <Text>체크아웃</Text>
                  <Text>2024. 07. 28. (일) {item.endDate}</Text>
                  <Text>11:00</Text>
                </Box>
              </Flex>
              <Text>
                  기준 {item.default_guest}인 / 최대 {item.max_guest}인
                </Text>
              <Text fontSize="md" textAlign="right">
                가격:
                {item.room && item.room[0] 
                ? item.room[0].price.toLocaleString('ko-KR', 
                { style: 'currency', currency: 'KRW' }) : 'N/A'}
              </Text>
              <Text 
              fontSize="md" 
              textAlign="right"
              >
                추가 요금: {item.extra_price}
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

export default PaymentDetail;
