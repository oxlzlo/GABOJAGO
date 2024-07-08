import { fetchAccommodation } from '@/api';
import { Accommodation, AccommodationListProps } from '@/lib/types/accommodation';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link, useLocation } from 'react-router-dom';

const AccommodationList = ({ accommodation }: AccommodationListProps) => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [cursor, setCursor] = useState<number>(1);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword') || '';
  const start = query.get('start') || '';
  const end = query.get('end') || '';
  const guest = parseInt(query.get('guest') || '2', 10);

  useEffect(() => {
    setAccommodations(accommodation);
    setCursor(accommodation.length);
    setHasMore(true);
  }, [accommodation]);

  const loadMore = () => {
    fetchAccommodation(cursor, keyword, start, end, guest)
      .then((response) => {
        const newData: Accommodation[] = response.data.data.content;
        if (newData.length === 0) {
          setHasMore(false);
        } else {
          setAccommodations((prev) => {
            const updatedAccommodations = newData.filter(
              (newItem) => !prev.some((existingItem) => existingItem.id === newItem.id),
            );
            return [...prev, ...updatedAccommodations];
          });
          setCursor(cursor + newData.length);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <>
      <InfiniteScroll pageStart={1} loadMore={loadMore} hasMore={hasMore}>
        <Grid
          templateColumns={{
            mobile: 'repeat(1, 1fr)',
            tablet: 'repeat(2, 1fr)',
            desktop: 'repeat(4, 1fr)',
          }}
          gap="1.5rem">
          {accommodations.map((accommodation, index) => (
            <Box key={`${accommodation.id}-${index}`}>
              <Box
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
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-end"
                      marginTop="3rem"
                      paddingRight="1rem">
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
            </Box>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default AccommodationList;
