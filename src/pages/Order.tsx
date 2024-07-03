import React, { useState } from 'react';
import { Flex, Box, Text, Checkbox, useTheme, Tooltip } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderDetails from '@/components/OrderDetails';
import { RoomListType } from '@/lib/types/accommodation';
import { CustomCheckboxProps } from '@/lib/types/customCheckbox';

const CustomCheckbox = ({ onChange, ...props }: CustomCheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
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
  const selectedRoom = location.state; // 선택한 특정 객실 정보
  const selectedItems = location.state.selectedItems || []; // 장바구니에 담긴 특정 객실 정보
  const theme = useTheme();
  const navigate = useNavigate();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsCheckboxChecked(isChecked);
  };

  const handlePayment = () => {
    if (isCheckboxChecked) {
      navigate('/order/payment', { state: { selectedItems } });
    }
  };

  if (!selectedRoom && !selectedItems && selectedItems.length === 0) {
    return (
      <Flex direction="column" justifyContent="flex-start" alignItems="center" minHeight="calc(100vh - 80px)" p={4}>
        <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>
      </Flex>
    );
  }

  const totalAmount = selectedItems.reduce(
    (accumulator: number, current: RoomListType) =>
      accumulator + (current.roomList && current.roomList[0] ? current.roomList[0].roomPrice : 0),
    0,
  );

  return (
    <>
      <Flex
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="calc(100vh - 80px)"
        p={4}
        px={20}>
        <Box width="100%" maxWidth="1240px" paddingTop="8rem">
          <Text mb={4} textAlign="left" fontWeight="900" fontSize="3rem">
            예약 결제
          </Text>
          <OrderDetails selectedItems={selectedItems} selectedRoom={selectedRoom} />
          <Box
            width="100%"
            padding="2.5rem"
            marginTop="5rem"
            border="1px solid"
            borderColor="main"
            borderRadius="1.5rem"
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
          <Flex mt={4} alignItems="center">
            <CustomCheckbox onChange={handleCheckboxChange} colorScheme="teal" borderColor="main" />
            <Text marginLeft="1rem" fontSize="1.5rem">
              [필수] 만 14세 이상 이용 동의
            </Text>
          </Flex>
          <Tooltip fontSize="1.7rem" color="black" label="필수 동의를 체크해 주세요" isDisabled={isCheckboxChecked}>
            <Box
              width="100%"
              padding="2.2rem"
              marginTop="5rem"
              border="1px solid gray"
              borderRadius="1.5rem"
              background={isCheckboxChecked ? theme.colors.main : theme.colors.gray}
              onClick={handlePayment}
              cursor={isCheckboxChecked ? 'pointer' : 'not-allowed'}>
              <Flex width="100%" justifyContent="center" alignItems="center">
                <Text textAlign="center" fontSize="3rem" color="white">
                  {`${totalAmount.toLocaleString('ko-KR', {
                    style: 'decimal',
                    currency: 'KRW',
                  })}원`}{' '}
                  결제하기
                </Text>
              </Flex>
            </Box>
          </Tooltip>
        </Box>
      </Flex>
    </>
  );
};

export default Order;
