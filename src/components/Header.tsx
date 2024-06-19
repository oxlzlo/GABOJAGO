import { Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import Logo from '@/assets/logo.svg?react';

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
          <Logo />
        </Heading>
        <Spacer />
        <Box display="flex" gap="1.5rem">
          <Button
            padding="2rem"
            background="white"
            border=".1rem solid "
            borderColor="main"
            borderRadius=".5rem"
            fontSize="2rem"
            _hover={{
              background: 'main',
              color: 'white',
            }}>
            로그인
          </Button>
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
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
