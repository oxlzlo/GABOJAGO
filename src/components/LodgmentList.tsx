import { fetchLodgment } from '@/api/fetchLodgment';
import { Lodgment } from '@/lib/types/Lodgment';
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LodgmentList = () => {
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);

  useEffect(() => {
    fetchLodgment().then((response) => {
      setLodgments(response);
    });
  }, []);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="1.5rem">
      {lodgments.map((lodgment, index) => (
        <Box
          key={lodgment.id}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="auto"
          height="auto"
          border="1px solid #e2e8f0"
          borderRadius="1rem"
          gap="1.5rem"
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.01)',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
          }}>
          <Link to={`/lodgment/${lodgment.id}`}>
            <Image src={lodgment.image} alt={lodgment.name} width="100%" height="20.7vh" borderRadius="1rem 1rem 0 0" />
            <Box display="flex" flexDirection="column" width="100%" height="20.7vh" paddingLeft="1rem" gap=".5rem">
              <Text fontSize="2rem" fontWeight="600">
                {lodgment.name}
              </Text>
              <Text fontSize="1.5rem">{lodgment.address}</Text>
              <Text fontSize="1.5rem">{lodgment.telephone}</Text>
              <Text fontSize="1.8rem">{lodgment.comment}</Text>
            </Box>
          </Link>
        </Box>
      ))}
    </Grid>
  );
};

export default LodgmentList;
