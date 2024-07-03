import { Flex, Box, Text, useTheme, Image, Divider } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const OrderConfirm = () => {
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const theme = useTheme();

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
      <Box width="100%" maxWidth="1240px" mx="auto" paddingTop="8rem">
        <Text mb={4} textAlign="left" fontWeight="900" fontSize="3rem">
          결제 확인
        </Text>
        <Box
          width="100%"
          p={6}
          border={`1px solid ${theme.colors.main}`}
          borderRadius="3xl"
          >
        {selectedItems.map((item) => (
          <Box
            key={item.id}
            width="100%"
            p={10}
            mb={3}
          >
<Flex 
  alignItems="center" 
  direction={['column', 'column', 'row']} // 모바일에서는 세로 정렬, 데스크탑에서는 가로 정렬
>
  <Image 
    src={item.thumbnail} 
    alt={item.name} 
    boxSize={['100px', '150px', '200px']} // 모바일에서는 작은 이미지, 데스크탑에서는 큰 이미지
    mb={[4, 4, 0]} // 모바일에서는 아래 마진 추가
    mr={[0, 0, 8]} // 데스크탑에서는 오른쪽 마진 추가
    borderRadius="lg" 
  />
  <Box flex="1" textAlign={['center', 'center', 'left']}> {/* 모바일에서 텍스트 가운데 정렬 */}
    <Text fontSize={['1.4rem', '1.6rem', '1.8rem']}>
      {item.startDate} - {item.endDate}
    </Text>
    <Text fontSize={['1.6rem', '1.8rem', '2rem']} fontWeight="900">
      {item.name}
    </Text>
    <Divider my={6} borderColor={`${theme.colors.main}`} />
    <Text fontSize="1.2rem">
      {item.roomList && item.roomList.length > 0 ? item.roomList[0].roomType : 'N/A'}
    </Text>
    <Text fontSize="1.2rem">
      최대 인원: {item.max_guest}인
    </Text>
    <Divider my={6} borderColor={`${theme.colors.main}`} />
    <Text fontSize="1.2rem">
      {item.roomList && item.roomList.length > 0 ? item.roomList[0].roomPrice.toLocaleString() : 'N/A'}원
    </Text>
  </Box>
</Flex>

          </Box>
        ))}
                <Box
          width="100%"
          p={10}
          mt={20}

        >
          <Flex justifyContent="right" width="100%"
          fontSize="2.4rem" fontWeight="700">
            <Text>결제금액</Text>
            <Text ml={6}>
              {totalAmount.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}
            </Text>
          </Flex>
        </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default OrderConfirm;
