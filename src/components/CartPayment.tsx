import { Box, Button, Text, Flex, Divider, Image, useTheme } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CartPayment = ({ selectedItems }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment', { state: { selectedItems } });
  };

  return (
    <Box border={`1px solid teal`} borderRadius="lg" p={10}>
      <Text fontWeight="900" fontSize="3rem" mb={4}>
        결제금액
      </Text>
      <Text fontSize="1.9rem" color={`${theme.colors.gray}`}>
        결제할 상품을 선택해 주세요.
      </Text>
      {selectedItems.length === 0 ? (
        <Text fontWeight="500" fontSize="1.9rem" color={`${theme.colors.gray}`}>
          현재 선택된 상품이 없습니다.
        </Text>
      ) : (
        selectedItems.map((item) => (
          <Box key={item.id} mb={4}>
            <Flex alignItems="center" mb={2}>
              <Image src={item.image} alt={item.name} boxSize="60px" mr={4} />
              <Box>
                <Text fontSize="2rem" fontWeight="900">
                  {item.name}
                </Text>
                <Text fontSize="1.3rem">
                  이용기간: {item.startDate} - {item.endDate}
                </Text>
                <Text fontSize="1.3rem">이용자 수: {item.userCount}인</Text>
              </Box>
            </Flex>
            <Divider borderColor="teal" />
            <Flex justifyContent="space-between" mt={2}>
              <Text>가격</Text>
              {/* 방어 코드 추가 */}
              <Text>{item.room && item.room[0] ? item.room[0].price.toLocaleString() : 'N/A'}원</Text>
            </Flex>
          </Box>
        ))
      )}
      {selectedItems.length > 0 && (
        <>
          <Divider borderColor="teal" mb={4} />
          <Flex justifyContent="space-between" fontWeight="bold">
            <Text fontWeight="900" fontSize="2rem">
              총 결제금액
            </Text>
            <Text>
              {selectedItems
                .reduce((acc, item) => acc + (item.room && item.room[0] ? item.room[0].price : 0), 0)
                .toLocaleString()}
              원
            </Text>
            <Button onClick={handlePayment}>결제하기</Button>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default CartPayment;
