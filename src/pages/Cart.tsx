import CartItem from '@/components/CartItem';
import CartPayment from '@/components/CartPayment';
import { Box } from '@chakra-ui/react';

const Cart = () => {

  return (
  <Box>
    <CartItem />
    <CartPayment />
  </Box>
    );
};

export default Cart;
