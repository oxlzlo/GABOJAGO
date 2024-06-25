import { fetchAccommodation, fetchLodgment } from '@/api';
import { Accommodation } from '@/lib/types/accommodation';
import { Lodgment } from '@/lib/types/lodgment';
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LodgmentList = () => {
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);

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
        if (response && Array.isArray(response.data.data)) {
          setAccommodations(response.data.data);
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
        {accommodations.map((accommodation, index) => (
          <Box
            key={index + 1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
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
            <Link to={`/accommodation/${index + 1}`}>
              <Image
                src={accommodation.image}
                alt={accommodation.name}
                width="100%"
                height="25.7vh"
                borderRadius="0.8rem 0.8rem 0 0"
              />
              <Box display="flex" flexDirection="column" width="100%" height="25.7vh" paddingLeft="1rem" gap=".5rem">
                <Text fontSize="2rem" fontWeight="900" marginTop="1rem">
                  {accommodation.name}
                </Text>
                <Text fontSize="1.5rem" color="gray">
                  {accommodation.address}
                </Text>
                <Text fontSize="1.5rem" color="gray">
                  {accommodation.numbers}
                </Text>
                <Text fontSize="1.8rem" color="gray">
                  {accommodation.comment}
                </Text>
                <Flex flexDirection="column">
                  <Text fontSize="1.5rem" color="gray">
                    1박당 요금
                  </Text>
                </Flex>
              </Box>
            </Link>
          </Box>
        ))}
      </Grid>

      <Grid templateColumns="repeat(4, 1fr)" gap="1.5rem">
        {lodgments.map((lodgment, _) => (
          <Box
            key={lodgment.id}
            display="flex"
            flexDirection="column"
            justifyContent="center"
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
                src={lodgment.image}
                alt={lodgment.name}
                width="100%"
                height="25.7vh"
                borderRadius="0.8rem 0.8rem 0 0"
              />
              <Box display="flex" flexDirection="column" width="100%" height="25.7vh" paddingLeft="1rem" gap=".5rem">
                <Text fontSize="2rem" fontWeight="900" marginTop="1rem">
                  {lodgment.name}
                </Text>
                <Text fontSize="1.5rem" color="gray">
                  {lodgment.address}
                </Text>
                <Text fontSize="1.5rem" color="gray">
                  {lodgment.telephone}
                </Text>
                <Text fontSize="1.8rem" color="gray">
                  {lodgment.comment}
                </Text>
                <Flex flexDirection="column">
                  <Text fontSize="1.5rem" color="gray">
                    1박당 요금
                  </Text>
                  <Text fontSize="2rem" color="red">
                    {lodgment.price.toLocaleString('ko-KR', {
                      style: 'currency',
                      currency: 'KRW',
                    })}
                  </Text>
                </Flex>
              </Box>
            </Link>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default LodgmentList;
