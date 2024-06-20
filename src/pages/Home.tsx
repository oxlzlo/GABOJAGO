import LodgmentList from '@/components/LodgmentList';
import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '@/lib/constants/slickCarousel';

const Home = () => {
  return (
    <Box paddingTop="8rem">
      <Slider {...settings}>
        <Box>
          <Image
            src="https://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243548102999472.jpg"
            width="100%"
            height="50vh"
            objectFit="cover"
            opacity=".7"
          />
        </Box>
        <Box>
          <Image
            src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243560922193661.jpg"
            width="100%"
            height="50vh"
            objectFit="cover"
            opacity=".7"
          />
        </Box>
        <Box>
          <Image
            src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243553155874372.jpg"
            width="100%"
            height="50vh"
            objectFit="cover"
            opacity=".7"
          />
        </Box>
      </Slider>
      <Box padding="4rem 15rem 7rem">
        <LodgmentList />
      </Box>
    </Box>
  );
};

export default Home;
