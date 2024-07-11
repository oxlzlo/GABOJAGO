import { Box, Image } from '@chakra-ui/react';
import { settings } from '@/lib/constants/slickCarousel';
import SearchBar from '@/components/SearchBar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Accommodation } from '@/lib/types/accommodation';
import { useLocation } from 'react-router-dom';
import AccommodationList from '@/components/AccommodationList';

const Home = () => {
  const [accommodationData, setAccommodationData] = useState<Accommodation[]>([]);
  const location = useLocation();

  useEffect(() => {
    const fetchFilteredData = async () => {
      const query = new URLSearchParams(location.search);
      const keyword = query.get('keyword') || '';
      const start = query.get('start') || '';
      const end = query.get('end') || '';
      const guest = query.get('guest') || '2';

      try {
        const url = `/open-api/accommodation`;
        const response = await axios.get(url, {
          params: { keyword, start, end, guest },
        });

        if (response.data && response.data.data && response.data.data.content) {
          setAccommodationData(response.data.data.content);
        } else {
          console.error('Unexpected API response structure', response.data);
          setAccommodationData([]); // 기본 값으로 빈 배열 설정
        }
      } catch (error) {
        console.error('검색어 필터링 오류', error);
        setAccommodationData([]); // 오류 발생 시 기본 값으로 빈 배열 설정
      }
    };
    fetchFilteredData();
  }, [location.search]);

  return (
    <Box paddingTop="8rem">
      <Box position="relative" overflowX="hidden">
        <Slider {...settings}>
          <Box pointerEvents="none">
            <Image
              src="https://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243548102999472.jpg"
              width="100%"
              height="70vh"
              opacity=".9"
            />
          </Box>
          <Box pointerEvents="none">
            <Image
              src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243560922193661.jpg"
              width="100%"
              height="70vh"
              opacity=".9"
            />
          </Box>
          <Box pointerEvents="none">
            <Image
              src="http://tourimage.interpark.com/BBS/Tour/FckUpload/202012/6374243553155874372.jpg"
              width="100%"
              height="70vh"
              opacity=".9"
            />
          </Box>
        </Slider>
        <SearchBar />
      </Box>
      <Box padding="8rem 15rem 7rem" display="flex" flexDirection="column" alignItems="center">
        <AccommodationList accommodation={accommodationData} />
      </Box>
    </Box>
  );
};

export default Home;
