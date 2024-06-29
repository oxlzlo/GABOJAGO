import { fetchAccommodation, fetchLodgment } from '@/api';
import { Accommodation } from '@/lib/types/accommodation';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LodgmentList = () => {
  const [lodgments, setLodgments] = useState<Accommodation[]>([]);

  useEffect(() => {
    fetchLodgment().then((response) => {
      setLodgments(response);
    });
  }, []);

  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

  useEffect(() => {
    fetchAccommodation()
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

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="1.5rem">
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
      <Grid templateColumns="repeat(4, 1fr)" gap="1.5rem">
        {lodgments.map((lodgment, _) => (
          <Box
            key={lodgment.id}
            width="auto"
            height="auto"
            border="1px solid "
            borderColor="grayLight"
            borderRadius="0.8rem"
            gap="1.5rem"
            _hover={{
              cursor: 'pointer',
              transform: 'scale(1.01)',
              boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            }}>
            <Link to={`/lodgment/${lodgment.id}`}>
              <Image
                src={lodgment.thumbnail}
                alt={lodgment.name}
                width="100%"
                height="25.7rem"
                borderRadius="0.8rem 0.8rem 0 0"
              />
              <Box display="flex" flexDirection="column" width="100%" height="auto" paddingLeft="1rem" gap=".5rem">
                <Text fontSize="2rem" fontWeight="900" marginTop="1rem">
                  {lodgment.name}
                </Text>
                <Box padding=".5rem">
                  <Text fontSize="1.5rem" color="gray">
                    {lodgment.address}
                  </Text>
                  <Text fontSize="1.5rem" color="gray">
                    {lodgment.numbers}
                  </Text>
                  <Text fontSize="1.8rem" color="gray">
                    {lodgment.comment}
                  </Text>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="flex-end" marginTop="3rem" paddingRight="1rem">
                  <Text fontSize="1.5rem" color="gray" paddingRight="2.8rem">
                    1박당 요금
                  </Text>
                  <Flex flexDirection="column">
                    <Text fontSize="2rem" color="red">
                      {`${lodgment.price.toLocaleString('ko-KR', {
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
      ;
    </>
  );
};

export default LodgmentList;
