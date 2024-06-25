import React, { useState } from 'react';
import '../index.css';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Logo from '../assets/logo.svg?react';
import emotionStyled from '@emotion/styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert('패스워드가 일치하지 않습니다.');
      return;
    }

    const payload = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/open-api/user/register',
        payload,
      );
      if (response.data.result_code === '201') {
        alert('회원가입이 정상적으로 처리되었습니다.');
        navigate('/signin');
      }
    } catch (error) {
      console.error('회원가입 에러', error);
      alert('회원가입에 실패하였습니다.');
    }
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
              <InputBox placeholder="E-mail *" value={email} onChange={(e) => setEmail(e.target.value)} />
              <InputBox
                placeholder="Password *"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputBox
                placeholder="Confirm Password *"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputBox placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} />
              <Button
                width="27.8vw"
                height="4.9vh"
                marginTop="2vh"
                borderRadius=".5rem"
                backgroundColor="main"
                fontSize="1.5rem"
                color="white"
                onClick={handleSubmit}
                _hover={{ bg: 'background', border: '.1rem solid var(--color-main)', color: 'main' }}>
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
