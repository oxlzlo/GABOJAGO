import React from 'react';
import '../index.css';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.svg?react';
import emotionStyled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <Box position="relative" height="100vh" backgroundColor="background">
      <Box
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        width="41.7vw"
        height="68.4vh"
        margin="auto"
        backgroundColor="white">
        <Flex flexDirection="column" justify="center" align="center" marginTop="14.6vh">
          <Logo />
          <Box marginTop="4.9vh">
            <Flex flexDirection="column" justify="center" align="center">
              <InputBox placeholder="E-mail" />
              <InputBox placeholder="Password" />
              <Button
                width="27.8vw"
                height="4.9vh"
                marginTop="2vh"
                borderRadius=".5rem"
                backgroundColor="main"
                fontSize="1.5rem"
                color="white"
                _hover={{ border: '.1rem solid var(--color-main)', bg: 'background', color: 'main' }}>
                Sign in
              </Button>
              <Box width="12vw" marginTop="2.5vh" marginLeft="2vw" fontSize="1.2rem" color="main">
                <Flex justify="space-between">
                  <Text cursor="pointer">아이디 찾기</Text>
                  <Text>|</Text>
                  <Text cursor="pointer" onClick={handleSignupClick}>
                    이메일로 회원가입
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignIn;

const InputBox = emotionStyled.input`
  width : 27.8vw;
  height: 4.9vh;
  margin-top: 2vh;
  padding: 2.6vh 2.1vw;
  border: .1rem solid var(--color-main);
  border-radius: .5rem;

  font-size: 1.5rem;
  color: var(--color-main);

  outline: none;
`;
