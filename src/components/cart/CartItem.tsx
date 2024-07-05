import { fetchCartItems, fetchDeleteCartItems } from '@/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Divider, Button } from '@chakra-ui/react';
import { CartCheckbox } from '@/lib/common/CartCheckbox';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { CartItemProps, CartItems } from '@/lib/types/cart';

const CartItem = ({ onSelectRooms, onDeleteSelectedRoom, selectedRooms, setCartRooms, cartRooms }: CartItemProps) => {
  // const [cartRooms, setCartRooms] = useState<CartItems[]>([]); // 장바구니 추가한 객실은 해당 state에 담김
  const navigate = useNavigate();

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

  const handleDeleteCartRoom = async (cartItemId: number) => {
    try {
      await fetchDeleteCartItems(cartItemId);
      const response = await fetchCartItems();
      setCartRooms(response.data.data.item_dto_list);
      onDeleteSelectedRoom(cartItemId);
    } catch (error) {
      console.error('delete error:', error);
    }
  };

  const handleAccommdationList = () => {
    navigate('/');
  };

  return (
    <>
      {cartRooms.length === 0 ? (
        <Flex flexDirection="column">
          <Text fontSize="2.5rem" fontWeight="900" color="gray" textAlign="center" marginTop="5rem">
            장바구니가 비어 있습니다.
          </Text>
          <Button
            onClick={handleAccommdationList}
            width="12rem"
            height="5rem"
            borderRadius=".5rem"
            marginTop="2rem"
            alignSelf="center"
            background="main"
            color="white"
            fontSize="1.5rem"
            _hover={{
              background: 'primaryHover',
            }}>
            숙박리스트 보기
          </Button>
        </Flex>
      ) : (
        cartRooms.map((cartRoom) => (
          <Box
            key={cartRoom.cart_item_id}
            padding="1.5rem"
            marginBottom="1rem"
            border="1px solid"
            borderColor="grayLight"
            borderRadius=".5rem">
            <Flex justifyContent="end">
              <Button onClick={() => handleDeleteCartRoom(cartRoom.cart_item_id)}>
                <CloseIcon />
              </Button>
            </Flex>
            <Flex marginBottom="2rem" alignItems="center" gap="1rem">
              <Box marginBottom="8rem">
                <CartCheckbox
                  cartRoom={cartRoom}
                  isChecked={selectedRooms.some((room) => room.cart_item_id === cartRoom.cart_item_id)}
                  onSelectRooms={onSelectRooms}
                  borderColor="teal"
                />
              </Box>
              <Image
                src={cartRoom.room.imageList}
                alt={cartRoom.room.roomTypeName}
                width="10rem"
                height="10rem"
                marginRight="2rem"
                border="1px solid"
                borderColor="grayLight"
                borderRadius=".5rem"
              />
              <Box>
                <Text fontSize="2rem" fontWeight="900">
                  {cartRoom.room.roomTypeName}
                </Text>
                <Text fontSize="1.5rem">{cartRoom.room.roomType}</Text>
                {/* <Text fontSize="1.2rem">
                  평점: {cartRoom.rating} / 리뷰 수: {cartRoom.reviewCount}
                </Text> */}
              </Box>
            </Flex>
            <Divider borderColor="main" />
            <Box marginTop="2rem" fontSize="1.2rem">
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
        ))
      )}
    </>
  );
};

export default CartItem;
