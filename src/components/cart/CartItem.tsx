import { fetchCartItems, fetchDeleteAllCartItems, fetchDeleteCartItems } from '@/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Divider } from '@chakra-ui/react';
import { Accommodation, Rooms } from '@/lib/types/accommodation';
import { CartCheckbox } from '@/lib/common/CartCheckbox';

type CartItemProps = {
  onSelecRooms: (accommodation: Accommodation, isSelected: boolean) => void;
};

type CartItems = {
  cart_item_id: number;
  start_date: string;
  end_date: string;
  room: Rooms;
};

const CartItem = ({ onSelecRooms }: CartItemProps) => {
  const [cartRooms, setCartRooms] = useState<CartItems[]>([]); // 장바구니 추가한 객실은 해당 state에 담김

  /**
   * 장바구니에 담긴 상품 조회
   */
  useEffect(() => {
    fetchCartItems()
      .then((response) => {
        setCartRooms(response.data.data.item_dto_list);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(cartRooms);
  // const handleCheckboxChange = (cartRoom) => {
  //   onSelectItem(cartRoom);
  // };

  // useEffect(() => {
  //   const cartItemIdList = cartItems;
  //   fetchDeleteCartItems(cartItemIdList).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  return (
    <>
      {cartRooms.map((cartRoom, _) => (
        <Box
          key={cartRoom.cart_item_id}
          padding="2.5rem"
          marginBottom="1rem"
          border="1px solid"
          borderColor="gray"
          borderRadius=".5rem">
          <Flex mb={10} alignItems="center">
            <Image
              src={cartRoom.room.imageList}
              alt={cartRoom.room.roomTypeName}
              width="10rem"
              height="10rem"
              marginRight="2rem"
              borderRadius="1rem"
            />
            <Box flex="1">
              <Text fontSize="2rem" fontWeight="900">
                {cartRoom.room.roomTypeName}
              </Text>
              <Text fontSize="1.5rem">{cartRoom.room.roomType}</Text>
              {/* <Text fontSize="1.2rem">
                평점: {cartItem.rating} / 리뷰 수: {cartItem.reviewCount}
              </Text> */}
            </Box>
            <CartCheckbox cartRoom={cartRoom} onSelecRooms={onSelecRooms} colorScheme="teal" borderColor="main" />
          </Flex>
          <Divider borderColor="gray" />
          <Box mt={10} fontSize="1.2rem">
            <Text fontSize="1.3rem">
              이용기간: {cartRoom.start_date} - {cartRoom.end_date}
            </Text>
            <Text fontSize="1.3rem">이용자 수: {cartRoom.room.roomDefaultGuest}인</Text>
            <Flex justifyContent="flex-end" fontSize="2rem" fontWeight="700">
              <Text>
                <span style={{ color: 'red' }}>
                  {`${cartRoom.room.roomPrice.toLocaleString('ko-KR', {
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
