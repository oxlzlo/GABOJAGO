import { Box, Image } from '@chakra-ui/react';
import { settings } from '@/lib/constants/slickCarousel';
import SearchBar from '@/components/SearchBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LodgmentList from '@/components/AccommodationList';
import { useEffect } from 'react';
import { fetchCartItems } from '@/api';

const Home = () => {
  useEffect(() => {
    fetchCartItems().then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <Box paddingTop="8rem">
      <Box position="relative" overflowX="hidden">
        <Slider {...settings}>
          <Box>
            <Image
              src="https://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243548102999472.jpg"
              width="100%"
              height="55vh"
              objectFit="cover"
              opacity=".6"
            />
          </Box>
          <Box>
            <Image
              src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243560922193661.jpg"
              width="100%"
              height="55vh"
              objectFit="cover"
              opacity=".6"
            />
          </Box>
          <Box>
            <Image
              src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243553155874372.jpg"
              width="100%"
              height="55vh"
              objectFit="cover"
              opacity=".6"
            />
          </Box>
        </Slider>
        <SearchBar />
      </Box>
      <Box padding="8rem 15rem 7rem" display="flex" flexDirection="column" alignItems="center">
        <LodgmentList />
      </Box>
    </Box>
  );
};

export default Home;
