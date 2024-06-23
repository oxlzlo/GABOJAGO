import { fetchLodgment } from '@/api';
import { Lodgment } from '@/lib/types/Lodgment';
import { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Checkbox, Divider } from '@chakra-ui/react';
import emotionStyled from '@emotion/styled';
import roomImage from '../assets/hotel.png';

const CartItem = () => {
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);

  useEffect(() => {
    fetchLodgment().then((response) => {
      setLodgments(response);
    });
  }, []);

  return (
    <>
      {lodgments.map((lodgment) => (
        <Box
          key={lodgment.id}
          display="flex"
          flexDirection="column"
          p={10}
          border="1px solid #005153"
          borderRadius="1rem">
          <Flex alignItems="center" mb={3}>
            {' '}
            {/* 첫 번째 행, 수평 정렬 및 하단 마진 */}
            <Image src={lodgment.image} alt={lodgment.name} boxSize="100px" mr={3} borderRadius="md" />
            <Box>
              <Text fontWeight="900" fontSize="1.5rem">
                {lodgment.name}
              </Text>{' '}
              {/* 굵은 텍스트로 이름 표시 */}
              <Text>평점: item.rating / 리뷰 수: item.reviewCount</Text> {/* 평점과 리뷰 수 표시 */}
            </Box>
            <Checkbox ml="auto" /> {/* 체크박스를 오른쪽 끝으로 배치 */}
          </Flex>
          <Divider borderColor="#005153" /> {/* 구분선 */}
          <Box mt={3}>
            {' '}
            {/* 두 번째 행, 상단 마진 */}
            <Text>이용기간: 'item.period'</Text> {/* 이용 기간 표시 */}
            <Text>이용자 수: 'item.userCount'명</Text> {/* 이용자 수 표시 */}
            <Text>
              이용금액:
              {lodgment.room && lodgment.room.length > 0 ? lodgment.room[0].price.toLocaleString() : 'N/A'}원
            </Text>{' '}
            {/* 이용 금액 표시 */}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CartItem;
