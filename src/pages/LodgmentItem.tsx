import { fetchLodgmentById } from '@/api';
import { AlertWindow } from '@/lib/common/AlertWindow';
import { Lodgment, Room } from '@/lib/types/lodgment';
import { Box, Button, Flex, Heading, Image, List, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Cart from '@/assets/images/cart.svg?react';
import { useNavigate, useParams } from 'react-router-dom';

const LodgmentItem = () => {
  const { id } = useParams<string>();
  const [lodgments, setLodgments] = useState<Lodgment[]>([]);
  const navigation = useNavigate();
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
      navigation(`/payment/${selectedRoom.id}`, { state: selectedRoom });
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
    navigation('/cart');
  };

  return (
    <>
      <Box>
        <Flex justify="center" flexDirection="column" alignItems="center" paddingTop="10rem">
          <List>
            {lodgments.map((lodgment) => (
              <ListItem key={lodgment.id}>
                <Heading marginBottom="2rem" fontSize="3rem">
                  {lodgment.name}
                </Heading>
                <Text
                  display="flex"
                  justifyContent="end"
                  color="red"
                  fontSize="2.5rem"
                  fontWeight="600"
                  marginBottom="2rem">
                  {lodgment.price.toLocaleString('ko-KR', {
                    style: 'currency',
                    currency: 'KRW',
                  })}
                </Text>
                <Image src={lodgment.image} alt={lodgment.name} width="52vw" height="63.8vh" marginBottom="1rem" />
                <Text fontSize="1.6rem">{lodgment.address}</Text>
                <Text fontSize="1.6rem" fontWeight="600">
                  {lodgment.telephone}
                </Text>
                <Text
                  marginTop="2rem"
                  fontWeight="600"
                  fontSize="2rem"
                  borderBottom="1px solid"
                  borderColor="grayLight">
                  숙소 소개
                </Text>
                <Text fontSize="1.8rem" marginBottom="2rem" color="gray">
                  {lodgment.comment}
                </Text>
                {lodgment.room && (
                  <List display="flex" flexDirection="column" gap="1rem">
                    <Heading borderBottom="1px solid" borderColor="grayLight">
                      객실을 선택하세요
                    </Heading>
                    {lodgment.room.map((item) => (
                      <ListItem
                        key={item.id}
                        borderBottom="1px solid"
                        borderColor="grayLight"
                        display="flex"
                        justifyContent="space-between"
                        padding="2rem 0"
                        gap="1rem">
                        <Flex gap="4rem">
                          {item.image && (
                            <Image src={item.image} alt={item.name} width="20vw" height="30vh" marginBottom="1rem" />
                          )}
                          <Flex flexDirection="column" gap=".5rem">
                            <Heading fontSize="2rem">{item.name}</Heading>
                            <Box display="flex" flexDirection="column" paddingLeft=".5rem" gap=".5rem">
                              <Text fontSize="1.6rem">{item.type}</Text>
                              <Text fontSize="1.6rem">
                                Extra Price:
                                {item.extra_price.toLocaleString('ko-KR', {
                                  style: 'currency',
                                  currency: 'KRW',
                                })}
                              </Text>
                              <Text fontSize="1.6rem">{item.comment}</Text>
                            </Box>
                          </Flex>
                        </Flex>
                        <Flex gap=".5rem" alignItems="end">
                          <Button
                            paddingY="1.8rem"
                            background="white"
                            border=".1rem solid "
                            borderColor="grayLight"
                            borderRadius=".5rem"
                            color="main"
                            _hover={{
                              background: 'main',
                              color: 'white',
                            }}
                            onClick={() => handlePayment(item)}>
                            <Cart width="3rem" height="3.5rem" />
                          </Button>
                          <Flex flexDirection="column" gap="1rem">
                            <Text
                              display="flex"
                              justifyContent="flex-end"
                              marginRight=".1rem"
                              alignItems="end"
                              fontSize="2rem"
                              color="price"
                              fontWeight="600">
                              {item.price.toLocaleString('ko-KR', {
                                style: 'currency',
                                currency: 'KRW',
                              })}
                            </Text>
                            <Button
                              padding="1.8rem"
                              background="main"
                              border=".1rem solid "
                              borderRadius=".5rem"
                              borderColor="grayLight"
                              color="white"
                              fontSize="1.6rem"
                              _hover={{
                                background: 'primaryHover',
                                color: 'white',
                              }}
                              onClick={handleCartAdd}>
                              지금 예약하기
                            </Button>
                          </Flex>
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
