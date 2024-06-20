import { fetchLodgmentById } from '@/api/fetchLodgment';
import { Lodgment } from '@/lib/types/Lodgment';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
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
          <ul>
            {lodgments.map((lodgment, index) => (
              <li key={lodgment.id}>
                <Heading>{lodgment.name}</Heading>
                <Image src={lodgment.image} alt={lodgment.name} width="40vw" height="40vh" />
                <p>{lodgment.address}</p>
                <p>{lodgment.telephone}</p>
                <p>{lodgment.comment}</p>
                {lodgment.room && (
                  <ul>
                    {lodgment.room.map((item, index) => (
                      <li key={item.id}>
                        <Heading>{item.name}</Heading>
                        <p>{item.type}</p>
                        <p>{item.extra_price}</p>
                        <p>{item.price}</p>
                        <p>{item.comment}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Flex>
      </Box>
    </>
  );
};

export default LodgmentItem;
