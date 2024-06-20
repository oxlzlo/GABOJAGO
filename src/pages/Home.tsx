import LodgmentList from '@/components/LodgmentList';
import { Box, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box paddingTop="8rem">
      <Image
        src="https://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243548102999472.jpg"
        width="100%"
        height="50vh"
        objectFit="cover"
      />
      <Box padding="4rem 15rem 7rem">
        <LodgmentList />
      </Box>
    </Box>
  );
};

export default Home;
