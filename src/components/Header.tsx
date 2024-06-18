import { Box, Flex, Heading, Button, Spacer } from '@chakra-ui/react';

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
      <Flex align="center" paddingX="28" paddingY="6">
        <Heading size="3xl">logo</Heading>
        <Spacer />
        <Box display="flex" gap="3">
          <Button
            border="1px"
            borderRadius="5"
            borderColor="main"
            size="lg"
            padding="8"
            fontSize="2xl"
            _hover={{
              background: 'main',
              color: 'white',
            }}>
            로그인
          </Button>
          <Button
            color="white"
            border="1px"
            borderRadius="5"
            borderColor="gray.300"
            background="main"
            padding="2rem"
            fontSize="2xl"
            _hover={{
              background: 'white',
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
