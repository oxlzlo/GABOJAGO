import { Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import Logo from '@/assets/logo.svg?react';
import Cart from '@/assets/images/cart.svg?react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      color="main"
      height="8rem"
      boxShadow="0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.03)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      background="white">
      <Flex align="center" paddingX="4.75rem" paddingY="1.5rem">
        <Heading>
          <Link to="/">
            <Logo />
          </Link>
        </Heading>
        <Spacer />
        <Box display="flex" gap="1.5rem">
          <Link to="/cart">
            <Cart width="4rem" height="3.5rem" cursor="pointer" />
          </Link>
          <Link to="/signin">
            <Button
              padding="2rem"
              background="white"
              border=".1rem solid "
              borderColor="main"
              borderRadius=".5rem"
              fontSize="2rem"
              color="main"
              _hover={{
                background: 'main',
                color: 'white',
              }}>
              로그인
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              padding="2rem"
              background="main"
              border=".1rem solid "
              borderRadius=".5rem"
              borderColor="main"
              color="white"
              fontSize="2rem"
              _hover={{
                background: 'btnHover',
                color: 'main',
              }}>
              회원가입
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
