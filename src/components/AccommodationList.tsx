import { fetchAccommodation } from '@/api';
import { Accommodation } from '@/lib/types/accommodation';
import { Box, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

const AccommodationList = ({ accommodation }) => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchAccommodation(page)
      .then((response) => {
        //  서버에서 받은  data가 배열인지 확인하는 코드
        if (response && Array.isArray(response.data.data.content)) {
          setAccommodations(response.data.data.content);
        } else {
          console.error('Expected an array but got:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    loadMore();
  }, []);

  /**
   * 무한 스크롤 함수
   * fetchAccommodation 함수를 호출하여 다음 페이지의 숙소 데이터를 반환
   */
  const loadMore = () => {
    fetchAccommodation(page)
      .then((response) => {
        if (response && Array.isArray(response.data.data.content)) {
          setAccommodations((prev) => [...prev, ...response.data.data.content]);
          console.log();
          setPage(page + 1); // 다음 페이지로 이동함
          if (response.data.data.content.length === 0) {
            setHasMore(false);
          }
        } else {
          console.error('Expected an array but got:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <Heading display="flex" justifyContent="center" key={0}>
            Loading...
          </Heading>
        }>
        <Grid
          templateColumns={{
            mobile: 'repeat(1, 1fr)',
            tablet: 'repeat(2, 1fr)',
            desktop: 'repeat(4, 1fr)',
          }}
          gap="1.5rem">
          {accommodations.map((accommodation, _) => (
            <Box
              key={accommodation.id}
              width="100%"
              height="100%"
              border="1px solid"
              borderColor="grayLight"
              borderRadius="0.8rem"
              gap="1.5rem"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.01)',
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
              }}>
              <Link to={`/accommodation/${accommodation.id}`}>
                <Image
                  src={accommodation.thumbnail}
                  alt={accommodation.name}
                  width="100%"
                  height="25.7rem"
                  borderRadius="0.8rem 0.8rem 0 0"
                />
                <Box display="flex" flexDirection="column" width="100%" height="auto" paddingLeft="1rem" gap=".5rem">
                  <Text fontSize="2rem" fontWeight="900" marginTop="1rem">
                    {accommodation.name}
                  </Text>
                  <Box padding=".5rem">
                    <Text fontSize="1.5rem" color="gray">
                      {accommodation.address}
                    </Text>
                    <Text fontSize="1.5rem" color="gray">
                      {accommodation.numbers}
                    </Text>
                    <Text fontSize="1.8rem" color="gray">
                      {accommodation.comment}
                    </Text>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="flex-end" marginTop="3rem" paddingRight="1rem">
                    <Text fontSize="1.5rem" color="gray" paddingRight="2.8rem">
                      1박당 요금
                    </Text>
                    <Flex flexDirection="column">
                      <Text fontSize="2rem" color="red">
                        {`${accommodation.price.toLocaleString('ko-KR', {
                          style: 'decimal',
                          currency: 'KRW',
                        })}원`}
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default AccommodationList;
