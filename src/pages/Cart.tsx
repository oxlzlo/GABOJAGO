import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import CartItem from '@/components/CartItem';
import CartPayment from '@/components/CartPayment';
import { Accommodation } from '@/lib/types/accommodation';
import { useAuth } from '@/store/authStore';

const Cart = () => {
  const { user } = useAuth(); // 로그인한 사용자 정보
  const [selectedItems, setSelectedItems] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const theme = useTheme();

  useEffect(() => {
    if (user) {
      // 로그인한 사용자의 장바구니 데이터를 불러오기
      const fetchCartItems = async () => {
        try {
          const response = await axios.get(`http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/api/user/cartItems`);
          setSelectedItems(response.data);
        } catch (error) {
          console.error('장바구니 데이터를 불러오는 중 오류가 발생했습니다:', error);
        } finally {
          setLoading(false); // 로딩 상태 종료
        }
      };

      fetchCartItems();
    } else {
      setLoading(false); // 사용자가 로그인하지 않은 경우 로딩 상태 종료
    }
  }, [user]);

  const handleSelectItem = (item: Accommodation, isSelected: boolean) => {
    if (isSelected) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
    }
  };

  if (loading) {
    return (
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 80px)"
        p={10}
      >
        <Text>로딩 중...</Text>
      </Flex>
    );
  }

  return (
    <Flex 
      direction="column" 
      justifyContent="flex-start" 
      minHeight="calc(100vh - 80px)" 
      p={10}
      alignItems="center" 
      >
      <Box 
        width="100%" 
        maxWidth="1240px" 
        mx="auto" 
        paddingTop="8rem">
        <Text 
          mb={4} 
          textAlign="left" 
          fontWeight="900" 
          fontSize="3rem">
          장바구니
        </Text>
        {selectedItems.length === 0 ? (
          <Box 
            justifyContent="center" 
            alignItems="center" 
            textAlign="center" 
            p={10} 
            mb={3} 
            border={`1px solid ${theme.colors.main}`} 
            borderRadius="xl">
            <Text height="60vh" fontWeight="500" fontSize="2rem">
              장바구니가 비어 있습니다.
            </Text>
          </Box>
        ) : (
          <Flex width="100%" gap="1rem">
            <Flex flex="1" direction="column">
              <CartItem onSelectItem={handleSelectItem} />
            </Flex>
            <Flex flex="1" direction="column">
              <CartPayment selectedItems={selectedItems} />
            </Flex>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Cart;
