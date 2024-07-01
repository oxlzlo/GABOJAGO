import { Flex, Box, Text, Checkbox, useTheme } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import PaymentDetail from '@/components/PaymentDetail';

const CustomCheckbox = ({ item, onSelectItem, ...props }) => {
  const handleChange = (e) => {
    onSelectItem(item, e.target.checked);
  };

  return (
    <Checkbox
      {...props}
      onChange={handleChange}
      sx={{
        '& .chakra-checkbox__control': {
          width: '2rem',
          height: '2rem',
        },
        '& .chakra-checkbox__icon': {
          fontSize: '2.5rem',
        },
      }}
    />
  );
};

const Payment = () => {
  const location = useLocation();
  const selectedItems = location.state.selectedItems || {};
  console.log(selectedItems);
  const theme = useTheme();

  if (!selectedItems || selectedItems.length === 0) {
    return (
      <Flex
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="calc(100vh - 80px)" // 헤더 높이 80px
        p={4}>
        <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>
      </Flex>
    );
  }

  const totalAmount = selectedItems.reduce(
    (acc, item) => acc + (item.roomList && item.roomList[0] ? item.roomList[0].roomPrice : 0),
    0,
  );

  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      minHeight="calc(100vh - 80px)" // 헤더 높이 80px
      p={4}>
      <Box width="100%" maxWidth="1240px" mx="auto" paddingTop="8rem">
        <Text mb={4} textAlign="left" fontWeight="900" fontSize="3rem">
          예약 결제
        </Text>
        <PaymentDetail selectedItems={selectedItems} />
        <Box
          width="100%"
          p={10}
          mt={20}
          border={`1px solid ${theme.colors.main}`}
          borderRadius="3xl"
          background="background">
          <Flex justifyContent="space-between" width="100%">
            <Text fontSize="3rem" fontWeight="900">
              총 결제금액
            </Text>
            <Text fontSize="3rem" color="price">
              {totalAmount.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}
            </Text>
          </Flex>
        </Box>
        {/* <CustomCheckbox
          item={}
          onSelectItem={}
          colorScheme="teal"
          borderColor={theme.colors.main}
        > */}
        [필수] 만 14세 이상 이용 동의
        {/* </CustomCheckbox> */}
        <Box width="100%" p={10} mt={20} border={`1px solid ${theme.colors.main}`} borderRadius="3xl" background="main">
          <Flex justifyContent="center" alignItems="center" width="100%">
            <Text textAlign="center" fontSize="3rem" color="white">
              {totalAmount.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })} 결제하기
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Payment;
