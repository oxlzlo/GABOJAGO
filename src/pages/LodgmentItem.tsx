import { fetchLodgmentById } from '@/api/fetchLodgment';
import { Lodgment } from '@/lib/types/Lodgment';
import { Flex, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LodgmentItem = () => {
  const { id } = useParams<{ id: string }>();
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);

  useEffect(() => {
    fetchLodgmentById(id).then((response) => {
      setLodgments(response);
    });
  }, [id]);

  return (
    <>
      <Flex paddingTop="8rem" justify="center" flexDirection="column" alignItems="center">
        <Image src={lodgments.image} alt={lodgments.name} width="40vw" height="40vh" />
        <h1>{lodgments.name}</h1>
        {lodgments.room && (
          <ul>
            {lodgments.room.map((item, index) => (
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
      </Flex>
    </>
  );
};

export default LodgmentItem;
