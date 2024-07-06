import { useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import CartItem from '@/components/cart/CartItem';
import CartOrder from '@/components/cart/CartOrder';
import { CartItems } from '@/lib/types/cart';
import { fetchCartItems, fetchDeleteCartItems } from '@/api';
import SelectAllCheckbox from '@/components/SelectAllCheckbox';

const Cart = () => {
  const [selectedRooms, setSelectedRooms] = useState<CartItems[]>([]);
  const [cartRooms, setCartRooms] = useState<CartItems[]>([]); // 장바구니 추가한 객실은 해당 state에 담김
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    fetchCartItems()
      .then((response) => {
        setCartRooms(response.data.data.item_dto_list);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  /**
   * 사용자가 상품을 선택하면 해당 상품을 selectedRoom 배열에 추가하고, 선택을 해제하면 배열에서 제거.
   * @param accommodationItem
   * @param isSelected
   */
  const handleSelectRooms = (roomItem: CartItems, isSelected: boolean) => {
    if (isSelected) {
      setSelectedRooms((prev) => [...prev, roomItem]);
    } else {
      setSelectedRooms((prev) => prev.filter((item) => item.cart_item_id !== roomItem.cart_item_id));
    }
  };

  /**
   * 선택한 객실을 삭제하는 함수
   *  @param cartItemId
   */
  const handleDeleteSelectedRoom = (cartItemId: number) => {
    setSelectedRooms((prev) => prev.filter((item) => item.cart_item_id !== cartItemId));
  };

  /**
   * 모두 선택 체크박스를 클릭했을 때, 모든 객실 선택/해제 함수
   * @param isSelected
   */
  const handleSelectAllRooms = (isSelected: boolean) => {
    setIsAllSelected(isSelected);
    if (isSelected) {
      setSelectedRooms(cartRooms);
    } else {
      setSelectedRooms([]);
    }
  };

  /**
   * 선택된 모든 객실을 삭제하는 함수
   */
  const handleAllDeleteSelectedRooms = async () => {
    try {
      const deletePromises = selectedRooms.map((room) => fetchDeleteCartItems(room.cart_item_id));
      await Promise.all(deletePromises);
      const response = await fetchCartItems();
      setCartRooms(response.data.data.item_dto_list);
      setSelectedRooms([]);
      setIsAllSelected(false);
    } catch (error) {
      console.error('delete error:', error);
    }
  };

  /**
   * 모든 객실 선택 시 모두 선택 체크박스 활성화
   * 모든 객실 선택 해제 시 모두 선택 체크박스 비활성화
   */
  useEffect(() => {
    setIsAllSelected(selectedRooms.length === cartRooms.length && cartRooms.length > 0);
  }, [selectedRooms, cartRooms]);

  return (
    <Flex flexDirection="column" alignItems="center" minHeight="calc(100vh - 80px)" padding="2.5rem">
      <Box width="100%" maxWidth="1240px" mx="auto" paddingTop="8rem">
        <Box
          display="flex"
          gap="1rem"
          marginBottom="1rem"
          fontSize="3rem"
          fontWeight="900"
          textAlign="left"
          color="main">
          <Text>장바구니</Text>
          {selectedRooms.length > 0 && <Text color="main">({selectedRooms.length})</Text>}
        </Box>
        <Flex width="100%" gap="2rem">
          <Flex flex="1" direction="column">
            <Box marginBottom="2.7rem" fontSize="1.5rem" display="flex" gap="1rem">
              <SelectAllCheckbox isChecked={isAllSelected} onChange={handleSelectAllRooms} borderColor="teal" />
              모두선택
            </Box>
            <CartItem
              onHandleSelectRooms={handleSelectRooms}
              onDeleteSelectedRoom={handleDeleteSelectedRoom}
              selectedRooms={selectedRooms}
              setCartRooms={setCartRooms}
              cartRooms={cartRooms}
            />
          </Flex>
          <Flex flex="1" direction="column">
            <Flex justifyContent="flex-end">
              <Button
                onClick={handleAllDeleteSelectedRooms}
                border="1px solid"
                width="8rem"
                height="4rem"
                fontSize="1.5rem"
                marginBottom="1rem"
                color="white"
                backgroundColor="main"
                _hover={{
                  backgroundColor: 'primaryHover',
                }}>
                선택삭제
              </Button>
            </Flex>
            <CartOrder selectedRooms={selectedRooms} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Cart;
