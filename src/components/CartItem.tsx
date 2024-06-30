import { fetchLodgment } from '@/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Checkbox, Divider, useTheme } from '@chakra-ui/react';
import { Accommodation } from '@/lib/types/accommodation';

const CustomCheckbox = ({
  accommodationItem,
  onSelectItem,
  ...props
}: {
  accommodationItem: Accommodation;
  onSelectItem: (accommodation: Accommodation, isSelected: boolean) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectItem(accommodationItem, event.target.checked);
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

export type CartItemProps = {
  onSelectItem: (accommodation: Accommodation, isSelected: boolean) => void;
};

const CartItem = ({ onSelectItem }: CartItemProps) => {
  const [accommodation, setAccommdation] = useState<Accommodation[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchLodgment();
      setAccommdation(response);
    };
    fetchData();
  }, []);

  return (
    <>
      {accommodation.map((accommodation, _) => (
        <Box key={accommodation.id} p={10} mb={3} border={`1px solid ${theme.colors.main}`} borderRadius="lg">
          <Flex mb={10} alignItems="center">
            <Image src={accommodation.thumbnail} alt={accommodation.name} boxSize="100px" mr={8} borderRadius="lg" />
            <Box flex="1">
              <Text fontSize="2rem" fontWeight="900">
                {accommodation.name}
              </Text>
              <Text fontSize="1.2rem">
                평점: {accommodation.rating} / 리뷰 수: {accommodation.reviewCount}
              </Text>
            </Box>
            <CustomCheckbox
              accommodationItem={accommodation}
              onSelectItem={onSelectItem}
              colorScheme="teal"
              borderColor={theme.colors.main}
            />
          </Flex>
          <Divider borderColor={`${theme.colors.main}`} />
          <Box mt={10} fontSize="1.2rem">
            <Text>
              이용기간: {accommodation.startDate} - {accommodation.endDate}
            </Text>
            <Text>이용자 수: {accommodation.userCount}인</Text>
            <Flex justifyContent="flex-end" fontSize="2rem" fontWeight="700">
              <Text>
                {accommodation.roomList && accommodation.roomList.length > 0
                  ? accommodation.roomList[0].roomPrice.toLocaleString()
                  : 'N/A'}
                원
              </Text>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CartItem;
