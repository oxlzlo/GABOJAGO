import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import CartItem from '@/components/CartItem';
import CartPayment from '@/components/CartPayment';
import { Lodgment } from '@/lib/types/Lodgment';

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState<Lodgment[]>([]);

  const handleSelectItem = (item: Lodgment, isSelected: boolean) => {
    if (isSelected) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
    }
  };

  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      minHeight="calc(100vh - 80px)" // 헤더 높이를 고려하여 전체 높이를 계산합니다.
      p={4}
    >
      <Box
        width="100%"
        maxWidth="1240px"
        mx="auto"
        paddingTop="8rem"
      >
        <Text
          fontWeight="900"
          fontSize="3rem"
          mb={4}
          textAlign="left"
        >
          장바구니
        </Text>
        <Flex
          width="100%"
          gap="1rem"
        >
          <Flex flex="1" direction="column">
            <CartItem onSelectItem={handleSelectItem} />
          </Flex>
          <Flex flex="1" direction="column">
            <CartPayment selectedItems={selectedItems} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Cart;
