import { getLodgment } from '@/api/fetchLodgment';
import { Lodgement } from '@/lib/types/lodgement';
import { Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const LodgmentList = () => {
  const [lodgments, setLodgments] = useState<Lodgement[]>([]);

  useEffect(() => {
    const fetchLodgments = async () => {
      const data = await getLodgment();
      setLodgments(data);
    };
    fetchLodgments();
  }, []);

  return (
    <>
      <UnorderedList display="flex" alignItems="center" gap="5rem" justifyContent="center">
        {lodgments.map((lodgment) => (
          <ListItem key={lodgment.id} listStyleType="none" display="flex" flexDirection="column" gap="1rem">
            <Image src={lodgment.image} alt={lodgment.name} />
            <Text fontSize="1.5rem">{lodgment.name}</Text>
            <Text fontSize="1.5rem">{lodgment.address}</Text>
            <Text>{lodgment.telephone}</Text>
            <Text>{lodgment.comment}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default LodgmentList;
