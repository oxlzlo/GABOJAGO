import { Box, Flex, Heading, Button, Spacer, Text, Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react';
import Logo from '@/assets/logo.svg?react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const handleUserNameClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <Box
      color="main"
      height="8rem"
      boxShadow="0 0.8rem 1.5rem 0 rgba(0, 0, 0, 0.03)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      borderBottom=".1rem solid var(--color-main)"
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
          <Popover>
            <PopoverTrigger>
              <Box display="flex" alignItems="center" paddingRight="2vw" cursor="pointer" onClick={handleUserNameClick}>
                <Text fontSize="2.4rem">{user.name} 님</Text>
                {showDropdown && (
                  <PopoverContent
                    top="1.3vh"
                    right="1.2vw"
                    width="9vw"
                    height="17.6vh"
                    borderRadius="0 0 .5rem .5rem"
                    ref={dropdownRef}>
                    <Flex flexDirection="column" align="center" gap="1vh" fontSize="2rem" color="black">
                      <Text marginTop="2.5vh" onClick={() => navigate('/cart')}>
                        장바구니
                      </Text>
                      <Text>주문내역</Text>
                      <Button
                        width="7vw"
                        height="4vh"
                        marginTop="1.8vh"
                        backgroundColor="main"
                        fontSize="2rem"
                        color="white"
                        borderRadius=".8rem"
                        onClick={handleLogout}>
                        로그아웃
                      </Button>
                    </Flex>
                  </PopoverContent>
                )}
              </Box>
            </PopoverTrigger>
          </Popover>
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
