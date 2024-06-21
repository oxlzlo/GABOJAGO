import { Box, Text, Flex, Divider, Image, useTheme } from '@chakra-ui/react';

const CartPayment = ({ selectedItems }) => {
  const theme = useTheme();

  return (
    <Box border={`1px solid teal`} borderRadius="lg" p={10}>
      <Text fontWeight="900" fontSize="3rem" mb={4}>결제금액</Text>
      <Text fontSize="1.9rem" color={`${theme.colors.gray}`}>결제할 상품을 선택해 주세요.</Text>
      {selectedItems.length === 0 ? (
        <Text fontWeight="500" fontSize="1.9rem" color={`${theme.colors.gray}`}>현재 선택된 상품이 없습니다.</Text>
      ) : (
        selectedItems.map((item) => (
          <Box key={item.id} mb={4}
          >
            <Flex alignItems="center" mb={2}>
              <Image src={item.image} alt={item.name} boxSize="60px" mr={4} />
              <Box>
                <Text
                  fontSize="2rem"
                  fontWeight="900" 
                >{item.name}</Text>
                <Text fontSize="1.3rem">이용기간: {item.startDate} - {item.endDate}</Text>
                <Text fontSize="1.3rem">이용자 수: 성인 {item.userCount}명</Text>
              </Box>
            </Flex>
            <Divider borderColor="teal" />
            <Flex justifyContent="space-between" mt={2}>
              <Text>가격</Text>
              <Text>{item.room[0].price.toLocaleString()}원</Text>
            </Flex>
          </Box>
        ))
      )}
      {selectedItems.length > 0 && (
        <>
          <Divider borderColor="teal" mb={4} />
          <Flex justifyContent="space-between" fontWeight="bold">
            <Text
              fontWeight="900" 
              fontSize="2rem" 
            >
              총 결제금액
            </Text>
            <Text>
              {selectedItems.reduce((acc, item) => acc + item.room[0].price, 0).toLocaleString()}원
            </Text>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default CartPayment;
