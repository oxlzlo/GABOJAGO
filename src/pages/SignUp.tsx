import React from 'react';
import '../index.css';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.svg?react';
import emotionStyled from '@emotion/styled';

const SignUp = () => {
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
              <InputBox placeholder="E-mail *" />
              <InputBox placeholder="Password *" />
              <InputBox placeholder="Confirm Password *" />
              <InputBox placeholder="Name *" />
              <Button
                width="27.8vw"
                height="4.9vh"
                marginTop="2vh"
                borderRadius=".5rem"
                backgroundColor="main"
                fontSize="1.5rem"
                color="white"
                _hover={{ border: '.1rem solid var(--color-main)', bg: 'background', color: 'main' }}>
                Sign up
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUp;

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
