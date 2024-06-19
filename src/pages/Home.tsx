import LodgmentList from '@/components/LodgmentList';
import { Box } from '@chakra-ui/react';
import Banner from '@/assets/banner.svg?react';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  return (
    <Box paddingTop="8rem">
      <Box position="relative">
        <Banner width="100%" height="auto" />
        <SearchBar />
      </Box>
      <Box padding="4rem 15rem 7rem">
        <LodgmentList />
      </Box>
    </Box>
  );
};

export default Home;
