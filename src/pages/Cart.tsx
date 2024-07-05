import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Rooms } from '@/lib/types/accommodation';
import CartItem from '@/components/cart/CartItem';
import CartOrder from '@/components/cart/CartOrder';

const Cart = () => {
  const [selectedRooms, setSelectedRooms] = useState<Rooms[]>([]);

  /**
   * 사용자가 상품을 선택하면 해당 상품을 selectedRoom 배열에 추가하고, 선택을 해제하면 배열에서 제거.
   * @param accommodationItem
   * @param isSelected
   */
  const handleSelectRooms = (roomItem: Rooms, isSelected: boolean) => {
    if (isSelected) {
      setSelectedRooms((prev) => [...prev, roomItem]);
    } else {
      // 1. cart_item_id 값이 같으면(일치하면), 그 객실을 selectedRooms 배열에서 제거.
      // 2. cart_item_id 값이 다르면(일치하지 않으면), 그 객실을 selectedRooms 배열에 유지.
      setSelectedRooms((prev) => prev.filter((item) => item.cart_item_id !== roomItem.cart_item_id));
    }
  };

  /**
   * 선택한 객실을 삭제하는 함수
   */
  const handleDeleteSelectedRoom = (cartItemId: number) => {
    setSelectedRooms((prev) => prev.filter((item) => item.cart_item_id !== cartItemId));
  };

  return (
    <Flex flexDirection="column" alignItems="center" minHeight="calc(100vh - 80px)" padding="2.5rem">
      <Box width="100%" maxWidth="1240px" mx="auto" paddingTop="8rem">
        <Text marginBottom="1rem" fontSize="3rem" fontWeight="900" textAlign="left" color="main">
          장바구니
        </Text>
        <Flex width="100%" gap="1rem">
          <Flex flex="1" direction="column">
            <CartItem onSelecRooms={handleSelectRooms} onDeleteSelectedRoom={handleDeleteSelectedRoom} />
          </Flex>
          <Flex flex="1" direction="column">
            <CartOrder selectedRooms={selectedRooms} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Cart;
