import LodgmentList from '@/components/LodgmentList';
import { Box } from '@chakra-ui/react';
import Banner from '@/assets/banner.svg?react';

const Home = () => {
  return (
    <Box paddingTop="8rem">
      <Banner width="100%" height="auto" />
      <Box padding="4rem 15rem 7rem">
        <LodgmentList />
      </Box>
    </Box>
  );
};

export default Home;
