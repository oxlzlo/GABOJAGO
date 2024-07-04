import { useState, useEffect } from 'react';
import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import CartItem from '@/components/CartItem';
import CartOrder from '@/components/CartOrder';
import { Accommodation } from '@/lib/types/accommodation';
import { fetchLodgment } from '@/api';

const Cart = () => {
  // const { user } = useAuth(); // 로그인한 사용자 정보
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const theme = useTheme();
  const [items, setItems] = useState<Accommodation[]>([]);
  const [selectedItems, setSelectedItems] = useState<Accommodation[]>([]);

  useEffect(() => {
    fetchLodgment().then((response) => {
      setItems(response);
      setLoading(false);
    });
  }, []);

  const handleSelectItem = (accommodationItem: Accommodation, isSelected: boolean) => {
    if (isSelected) {
      setSelectedItems((prev) => [...prev, accommodationItem]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item.id !== accommodationItem.id));
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center" minHeight="calc(100vh - 80px)" padding="2.5rem">
      <Box width="100%" maxWidth="1240px" mx="auto" paddingTop="8rem">
        <Text marginBottom="1rem" fontSize="3rem" fontWeight="900" textAlign="left" color="main">
          장바구니
        </Text>
        {items.length === 0 ? (
          <Box
            justifyContent="center"
            alignItems="center"
            p={10}
            mb={3}
            border="1px solid"
            borderColor="main"
            borderRadius="1rem">
            textAlign="center"
            <Text height="60vh" fontSize="2rem" fontWeight="500">
              장바구니가 비어 있습니다.
            </Text>
          </Box>
        ) : (
          <Flex width="100%" gap="1rem">
            <Flex flex="1" direction="column">
              <CartItem onSelectItem={handleSelectItem} />
            </Flex>
            <Flex flex="1" direction="column">
              <CartOrder selectedItems={selectedItems} />
            </Flex>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Cart;
