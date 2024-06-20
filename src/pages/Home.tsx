import LodgmentList from '@/components/LodgmentList';
import { Box, Image } from '@chakra-ui/react';
import SearchBar from '@/components/SearchBar';

const Home = () => {
  return (
    <Box paddingTop="8rem">
      <Box position="relative">
        <Image
          src="https://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243548102999472.jpg"
          width="100%"
          height="50vh"
          objectFit="cover"
        />
        <SearchBar />
      </Box>

      <Box padding="4rem 15rem 7rem">
        <LodgmentList />
      </Box>
    </Box>
  );
};

export default Home;
