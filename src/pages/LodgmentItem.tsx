import { fetchLodgmentById } from '@/api/fetchLodgment';
import { Lodgment } from '@/lib/types/Lodgment';
import { Box, Flex, Heading, Image, List, ListItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LodgmentItem = () => {
  const { id } = useParams<string>();
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);
  const navgiation = useNavigate();

  useEffect(() => {
    fetchLodgmentById(id as string).then((response) => {
      setLodgments([response]);
    });
  }, [id]);

  const handlePayment = (room) => {
    navgiation(`/payment/${room.id}`, { state: room });
  };

  const handleCartAdd = () => {
    navgiation('/cart');
  };

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
                <br />
                {lodgment.room && (
                  <List display="flex" flexDirection="column" gap="1rem">
                    <h1>객실을 선택하세요</h1>
                    {lodgment.room.map((item) => (
                      <ListItem key={item.id} border="1px" borderColor="gray" padding="2rem" borderRadius="0.8rem">
                        <Heading as="h3" size="md" mb={2}>
                          {item.name}
                        </Heading>
                        <Text fontSize="sm">{item.type}</Text>
                        <Text fontSize="sm">Extra Price: {item.extra_price}</Text>
                        <Text fontSize="sm">Price: {item.price}</Text>
                        <Text fontSize="sm" mb={2}>
                          {item.comment}
                        </Text>
                        <Flex flexDirection="column" justifyContent="center" alignItems="end">
                          <button onClick={() => handlePayment(item)}>지금 예약하기</button>
                          <button onClick={handleCartAdd}>장바구니에 추가하기</button>
                        </Flex>
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
