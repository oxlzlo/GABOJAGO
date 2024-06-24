import { fetchLodgmentById } from '@/api';
import { AlertWindow } from '@/lib/common/AlertWindow';
import { Lodgment, Room } from '@/lib/types/lodgment';
import { Box, Button, Flex, Heading, Image, List, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const LodgmentItem = () => {
  const { id } = useParams<string>();
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);
  const navgiation = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room>({
    id: '',
    name: '',
    type: '',
    extra_price: 0,
    price: 0,
    comment: '',
    max_person: 0,
    image: '',
  });

  const handleConfirm = () => {
    if (selectedRoom) {
      navgiation(`/payment/${selectedRoom.id}`, { state: selectedRoom });
    }
    onClose();
  };

  useEffect(() => {
    fetchLodgmentById(id as string).then((response) => {
      setLodgments([response]);
    });
  }, [id]);

  const handlePayment = (room: Room) => {
    setSelectedRoom(room);
    onOpen();
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
                      <ListItem
                        key={item.id}
                        border="1px solid"
                        borderColor="grayLight"
                        padding="2rem"
                        borderRadius="0.8rem">
                        {item.image && (
                          <Image src={item.image} alt={item.name} width="20vw" height="30vh" marginBottom="1rem" />
                        )}
                        <Heading as="h3" size="md" mb={2}>
                          {item.name}
                        </Heading>
                        <Text fontSize="sm">{item.type}</Text>
                        <Text fontSize="sm">
                          Extra Price:
                          {item.extra_price.toLocaleString('ko-KR', {
                            style: 'currency',
                            currency: 'KRW',
                          })}
                        </Text>
                        <Text fontSize="sm">
                          Price:
                          {item.price.toLocaleString('ko-KR', {
                            style: 'currency',
                            currency: 'KRW',
                          })}
                        </Text>
                        <Text fontSize="sm" mb={2}>
                          {item.comment}
                        </Text>
                        <Flex flexDirection="column" justifyContent="center" alignItems="end" gap="0.6rem">
                          <Button
                            paddingY="1.8rem"
                            paddingX="4.07rem"
                            background="white"
                            border=".1rem solid "
                            borderColor="main"
                            borderRadius=".5rem"
                            fontSize="1.5rem"
                            color="main"
                            _hover={{
                              background: 'main',
                              color: 'white',
                            }}
                            onClick={() => handlePayment(item)}>
                            지금 예약하기
                          </Button>
                          <Button
                            padding="1.8rem"
                            background="main"
                            border=".1rem solid "
                            borderRadius=".5rem"
                            borderColor="main"
                            color="white"
                            fontSize="1.5rem"
                            _hover={{
                              background: 'primaryHover',
                              color: 'white',
                            }}
                            onClick={handleCartAdd}>
                            장바구니에 추가하기
                          </Button>
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
      <AlertWindow
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
        title="이 객실을 예약하시겠습니까?"
        body=" "
        confirmButtonText="예약하기"
        cancelButtonText="아니오"
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default LodgmentItem;
