import { useState } from 'react';
import { Flex, Box, Text, Checkbox, useTheme, Tooltip } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderDetails from '@/components/OrderDetails';

const CustomCheckbox = ({ onChange, ...props }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
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

const Order = () => {
  const location = useLocation();
  const selectedItems = location.state.selectedItems || [];
  const theme = useTheme();
  const navigate = useNavigate();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (isChecked) => {
    setIsCheckboxChecked(isChecked);
  };

  const handlePayment = () => {
    if (isCheckboxChecked) {
      navigate('/order/payment', { state: { selectedItems } });
    }
  };

  if (!selectedItems || selectedItems.length === 0) {
    return (
      <Flex 
        direction="column" 
        justifyContent="flex-start" 
        alignItems="center" 
        minHeight="calc(100vh - 80px)" 
        p={4}
      >
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
      minHeight="calc(100vh - 80px)" 
      p={4} 
      px={20}
    >
      <Box 
        width="100%" 
        maxWidth="1240px" 
        mx="auto" 
        paddingTop="8rem"
      >
        <Text 
          mb={4} 
          textAlign="left" 
          fontWeight="900" 
          fontSize="3rem"
        >
          예약 결제
        </Text>
        <OrderDetails selectedItems={selectedItems} />
        <Box 
          width="100%" 
          p={10} 
          mt={20} 
          border={`1px solid ${theme.colors.main}`} 
          borderRadius="3xl" 
          background="background"
        >
          <Flex justifyContent="space-between" width="100%">
            <Text fontSize="3rem" fontWeight="900">
              총 결제금액
            </Text>
            <Text fontSize="3rem" color="price">
              {totalAmount.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}
            </Text>
          </Flex>
        </Box>
        <Flex mt={4} alignItems="center">
          <CustomCheckbox 
            onChange={handleCheckboxChange} 
            colorScheme="teal" 
            borderColor={theme.colors.main} 
          />
          <Text ml={2}>[필수] 만 14세 이상 이용 동의</Text>
        </Flex>
        <Tooltip 
          fontSize="1.5rem" 
          color="black" 
          label="필수 동의를 체크해 주세요" 
          isDisabled={isCheckboxChecked}
        >
          <Box
            width="100%"
            p={10}
            mt={20}
            border={`1px solid ${theme.colors.main}`}
            borderRadius="3xl"
            background={isCheckboxChecked ? theme.colors.main : theme.colors.gray}
            onClick={handlePayment}
            cursor={isCheckboxChecked ? 'pointer' : 'not-allowed'}
          >
            <Flex 
              width="100%"
              justifyContent="center" 
              alignItems="center" 
            >
              <Text 
                textAlign="center" 
                fontSize="3rem" 
                color="white"
              >
                {totalAmount.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })} 결제하기
              </Text>
            </Flex>
          </Box>
        </Tooltip>
      </Box>
    </Flex>
  );
};

export default Order;
