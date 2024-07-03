import { Box, Heading, Image } from '@chakra-ui/react';
import { settings } from '@/lib/constants/slickCarousel';
import SearchBar from '@/components/SearchBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Suspense, lazy, useEffect, useState } from 'react';
import axios from 'axios';
import { Accommodation } from '@/lib/types/accommodation';

const AccommodationList = lazy(() => import('@/components/AccommodationList'));

const Home = () => {
  const [accommodationData, setAccommodationData] = useState<Accommodation[]>([]);
  const [filteredData, setFilteredData] = useState<Accommodation[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get(
          'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/open-api/accommodation',
        );
        setAccommodationData(response.data.data.content);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    fetchInitialData();
  }, []);

  const handleSearch = (data: Accommodation[]) => {
    setFilteredData(data);
  };

  return (
    <Box paddingTop="8rem">
      <Box position="relative" overflowX="hidden">
        <Slider {...settings}>
          <Box pointerEvents="none">
            <Image
              src="https://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243548102999472.jpg"
              width="100%"
              height="55vh"
              objectFit="cover"
              opacity=".6"
            />
          </Box>
          <Box pointerEvents="none">
            <Image
              src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243560922193661.jpg"
              width="100%"
              height="55vh"
              objectFit="cover"
              opacity=".6"
            />
          </Box>
          <Box pointerEvents="none">
            <Image
              src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243553155874372.jpg"
              width="100%"
              height="55vh"
              objectFit="cover"
              opacity=".6"
            />
          </Box>
        </Slider>
        <SearchBar onSearch={handleSearch} />
      </Box>
      <Box padding="8rem 15rem 7rem" display="flex" flexDirection="column" alignItems="center">
        <Suspense fallback={<Heading>Loading...</Heading>}>
          <AccommodationList accommodation={filteredData.length > 0 ? filteredData : accommodationData} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Home;
