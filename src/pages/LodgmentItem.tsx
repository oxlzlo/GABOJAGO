import { fetchLodgmentById } from '@/api/fetchLodgment';
import { Lodgment } from '@/lib/types/Lodgment';
import { Box, Flex, Heading, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LodgmentItem = () => {
  const { id } = useParams<string>();
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);

  useEffect(() => {
    fetchLodgmentById(id as string).then((response) => {
      setLodgments([response]);
    });
  }, [id]);

  return (
    <>
      <Box>
        <Flex justify="center" flexDirection="column" alignItems="center" paddingTop="10rem">
          <List>
            {lodgments.map((lodgment) => (
              <ListItem key={lodgment.id}>
                <Heading marginBottom="1rem">{lodgment.name}</Heading>
                <Text fontSize="2rem" display="flex" justifyContent="end" color="red">
                  {lodgment.price.toLocaleString('ko-KR', {
                    style: 'currency',
                    currency: 'KRW',
                  })}
                </Text>
                <Image src={lodgment.image} alt={lodgment.name} width="40vw" height="63.8vh" marginBottom="1rem" />
                <Text fontSize="1.5rem">{lodgment.address}</Text>
                <Text fontSize="1.5rem">{lodgment.telephone}</Text>
                <Text marginTop="2rem" fontSize="1.5rem" borderBottom="1px solid gray">
                  숙소 소개
                </Text>
                <Text fontSize="1.8rem">{lodgment.comment}</Text>
                {lodgment.room && (
                  <List>
                    {lodgment.room.map((item) => (
                      <ListItem key={item.id} borderTop="1px" borderColor="gray.100" pt={2}>
                        <Heading as="h3" size="md" mb={2}>
                          {item.name}
                        </Heading>
                        <Text fontSize="sm">{item.type}</Text>
                        <Text fontSize="sm">Extra Price: {item.extra_price}</Text>
                        <Text fontSize="sm">Price: {item.price}</Text>
                        <Text fontSize="sm" mb={2}>
                          {item.comment}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                )}
              </ListItem>
            ))}
          </List>
        </Flex>
      </Box>
    </>
  );
};

export default LodgmentItem;
