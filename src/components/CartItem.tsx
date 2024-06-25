import { fetchLodgment } from '@/api';
import { Lodgment } from '@/lib/types/lodgment';
import { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Checkbox, Divider, useTheme } from '@chakra-ui/react';

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

const CartItem = ({ onSelectItem }) => {
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchLodgment();
      setLodgments(response);
    };
    fetchData();
  }, []);

  return (
    <>
      {lodgments.map((lodgment) => (
        <Box 
          key={lodgment.id} 
          p={10} 
          mb={3} 
          border={`1px solid ${theme.colors.main}`} 
          borderRadius="lg"
        >
          <Flex mb={10} alignItems="center">
            <Image 
              src={lodgment.image} 
              alt={lodgment.name} 
              boxSize="100px" 
              mr={8} 
              borderRadius="lg" 
            />
            <Box flex="1">
              <Text 
                fontSize="2rem"
                fontWeight="900" 
              >
                {lodgment.name}
              </Text>
              <Text fontSize="1.2rem">
                평점: {lodgment.rating} / 리뷰 수: {lodgment.reviewCount}
              </Text>
            </Box>
            <CustomCheckbox
              item={lodgment}
              onSelectItem={onSelectItem}
              colorScheme="teal"
              borderColor={theme.colors.main}
            />
          </Flex>
          <Divider borderColor={`${theme.colors.main}`} />
          <Box mt={10} fontSize="1.2rem">
            <Text>이용기간: {lodgment.startDate} - {lodgment.endDate}</Text>
            <Text>이용자 수: {lodgment.userCount}인</Text>
            <Flex 
              justifyContent="flex-end"
              fontSize="2rem"
              fontWeight="700"
            >
              <Text>
                {lodgment.room && lodgment.room.length > 0 
                  ? lodgment.room[0].price.toLocaleString() 
                  : 'N/A'}원
              </Text>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CartItem;
