import { Box, Heading } from '@chakra-ui/react';
import Logo from '../assets/logo.svg?react'

const Home = () => {
  return (
    <Box padding="14rem 3rem 7rem">
      <Heading size="3xl">Home</Heading>
      <Logo />
    </Box>
  );
};

export default Home;
