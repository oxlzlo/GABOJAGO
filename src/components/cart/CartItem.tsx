import { fetchCartItems } from '@/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Checkbox, Divider } from '@chakra-ui/react';
import { Accommodation, Rooms } from '@/lib/types/accommodation';

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

type CartItemProps = {
  onSelectItem: (accommodation: Accommodation, isSelected: boolean) => void;
};

type CartItems = {
  cart_item_id: number;
  start_date: string;
  end_date: string;
  room: Rooms;
};

const CartItem = ({ onSelectItem }: CartItemProps) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  useEffect(() => {
    fetchCartItems()
      .then((response) => {
        setCartItems(response.data.data.item_dto_list);
        console.log(response.data.data.item_dto_list.room);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {cartItems.map((cartItem, _) => (
        <Box
          key={cartItem.cart_item_id}
          padding="2.5rem"
          marginBottom="1rem"
          border="1px solid"
          borderColor="gray"
          borderRadius=".5rem">
          <Flex mb={10} alignItems="center">
            <Image
              src={cartItem.room.imageList}
              alt={cartItem.room.roomTypeName}
              width="10rem"
              height="10rem"
              marginRight="2rem"
              borderRadius="1rem"
            />
            <Box flex="1">
              <Text fontSize="2rem" fontWeight="900">
                {cartItem.room.roomTypeName}
              </Text>
              <Text fontSize="1.5rem">{cartItem.room.roomType}</Text>
              {/* <Text fontSize="1.2rem">
                평점: {cartItem.rating} / 리뷰 수: {cartItem.reviewCount}
              </Text> */}
            </Box>
            <CustomCheckbox
              accommodationItem={cartItem}
              onSelectItem={onSelectItem}
              colorScheme="teal"
              borderColor="main"
            />
          </Flex>
          <Divider borderColor="gray" />
          <Box mt={10} fontSize="1.2rem">
            <Text fontSize="1.3rem">
              이용기간: {cartItem.start_date} - {cartItem.end_date}
            </Text>
            <Text fontSize="1.3rem">이용자 수: {cartItem.room.roomDefaultGuest}인</Text>
            <Flex justifyContent="flex-end" fontSize="2rem" fontWeight="700">
              <Text>
                <span style={{ color: 'red' }}>
                  {`${cartItem.room.roomPrice.toLocaleString('ko-KR', {
                    style: 'decimal',
                    currency: 'KRW',
                  })}원`}
                </span>
              </Text>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CartItem;
