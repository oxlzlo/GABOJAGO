import { Box, Flex, Heading, Button, Spacer, Text } from '@chakra-ui/react';
import Logo from '@/assets/logo.svg?react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user } = useAuth();

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
      <Flex height="8rem" align="center" paddingX="4.75rem">
        <Heading>
          <Link to="/">
            <Logo />
          </Link>
        </Heading>
        <Spacer />
        {user ? (
          <Box display="flex" alignItems="center" gap="1.5rem">
            <Text fontSize="1.8rem">{user.name}님</Text>
          </Box>
        ) : (
          <Box display="flex" gap="1.5rem">
            <Link to="/signin">
              <Button
                padding="1.8rem"
                background="white"
                border=".1rem solid "
                borderColor="main"
                borderRadius=".5rem"
                fontSize="1.8rem"
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
                padding="1.8rem"
                background="main"
                border=".1rem solid "
                borderRadius=".5rem"
                borderColor="main"
                color="white"
                fontSize="1.8rem"
                _hover={{
                  background: 'primaryHover',
                  color: 'white',
                }}>
                회원가입
              </Button>
            </Link>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
