import { fetchLodgmentById } from '@/api';
import { Box, Button, Flex, Heading, Image, List, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { SetStateAction, useEffect, useState } from 'react';
import Cart from '@/assets/images/cart.svg?react';
import { useNavigate, useParams } from 'react-router-dom';
import { Accommodation, Rooms } from '@/lib/types/accommodation';
import { ReservationModal } from '@/lib/common/ReservationModal';

const LodgmentItem = () => {
  const { lodgmentId } = useParams<string>();
  const [lodgments, setLodgments] = useState<Accommodation[]>([]);
  const navigation = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRooms, setSelectedRooms] = useState<Rooms>({
    id: 0,
    imageList: '',
    roomType: '',
    roomTypeName: '',
    roomPrice: 0,
    roomExtraPrice: 0,
    roomStock: 0,
    roomDefaultGuest: 0,
    roomMaxGuest: 0,
    comment: '',
  });

  const handleConfirm = () => {
    if (selectedRooms) {
      navigation(`/payment/${selectedRooms.id}`, { state: selectedRooms });
    }
    onClose();
  };

  useEffect(() => {
    fetchLodgmentById(lodgmentId as string)
      .then((response) => {
        setLodgments([response]);
      })
      .catch((error) => {
        const errorTime = new Date().toISOString();
        console.error(`[${errorTime}] Error  data:`, error);
      });
  }, [lodgmentId]);

  const handlePayment = (room: SetStateAction<Rooms>) => {
    setSelectedRooms(room);
    onOpen();
  };

  const handleCartAdd = () => {};

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
                  {`${lodgment.price.toLocaleString('ko-KR', {
                    style: 'decimal',
                    currency: 'KRW',
                  })}원`}
                </Text>
                <Image src={lodgment.thumbnail} alt={lodgment.name} width="52vw" height="63.8vh" marginBottom="1rem" />
                <Text fontSize="1.6rem">{lodgment.address}</Text>
                <Text fontSize="1.6rem" fontWeight="600">
                  {lodgment.numbers}
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
                {lodgment.roomList && (
                  <List display="flex" flexDirection="column" gap="1rem">
                    <Heading borderBottom="1px solid" borderColor="grayLight">
                      객실을 선택하세요
                    </Heading>
                    {lodgment.roomList.map((room, _) => (
                      <ListItem
                        key={room.id}
                        borderBottom="1px solid"
                        borderColor="grayLight"
                        display="flex"
                        justifyContent="space-between"
                        padding="2rem 0"
                        gap="1rem">
                        <Flex gap="4rem">
                          {room.imageList && (
                            <Image
                              src={room.imageList[0]}
                              alt={room.roomTypeName}
                              width="20vw"
                              height="30vh"
                              marginBottom="1rem"
                            />
                          )}
                          <Flex flexDirection="column" gap=".5rem">
                            <Heading fontSize="2rem">{room.roomTypeName}</Heading>
                            <Box display="flex" flexDirection="column" paddingLeft="1rem" gap=".5rem">
                              <Text fontSize="1.6rem">{room.roomType}</Text>
                              <Text fontSize="1.6rem">
                                기준 {room.roomDefaultGuest}인 / 최대 {room.roomMaxGuest}명
                              </Text>
                              <Text fontSize="1.6rem" display="flex" gap=".5rem">
                                추가금액:{' '}
                                <span style={{ color: 'red' }}>
                                  {`${room.roomPrice.toLocaleString('ko-KR', {
                                    style: 'decimal',
                                    currency: 'KRW',
                                  })}원`}
                                </span>
                              </Text>
                              <Text fontSize="1.6rem">{room.comment}</Text>
                            </Box>
                          </Flex>
                        </Flex>
                        <Flex gap=".5rem" alignItems="end">
                          <Button
                            onClick={handleCartAdd}
                            paddingY="1.8rem"
                            background="white"
                            border=".1rem solid "
                            borderColor="grayLight"
                            borderRadius=".5rem"
                            color="main"
                            _hover={{
                              background: 'main',
                              color: 'white',
                            }}>
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
                              {`${room.roomPrice.toLocaleString('ko-KR', {
                                style: 'decimal',
                                currency: 'KRW',
                              })}원`}
                            </Text>
                            <Button
                              onClick={() => handlePayment(room)}
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
                              }}>
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
      <ReservationModal
        isOpen={isOpen}
        onClose={onClose}
        title="이 객실을 예약하시겠습니까?"
        body={
          <Box>
            <Text>객실 이름: {selectedRooms.roomTypeName}</Text>
            <Text>객실 타입: {selectedRooms.roomType}</Text>
            <Text>
              가격:{' '}
              {`${selectedRooms.roomPrice.toLocaleString('ko-KR', {
                style: 'decimal',
                currency: 'KRW',
              })}원`}
            </Text>
          </Box>
        }
        confirmButtonText="예약하기"
        cancelButtonText="아니오"
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default LodgmentItem;
