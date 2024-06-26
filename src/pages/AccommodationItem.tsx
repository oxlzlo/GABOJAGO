import { fetchAccommodationById } from '@/api';
import { Accommodation, Rooms } from '@/lib/types/accommodation';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AccommodationItem = () => {
  const { accommodationId } = useParams<string>();
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const navigation = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
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
    fetchAccommodationById(accommodationId as string)
      .then((response) => {
        const { data } = response.data;
        setAccommodations([data]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [accommodationId]);

  return (
    <Box paddingTop="30rem" paddingLeft="20rem">
      {accommodations.map((accommodation, index) => (
        <Box key={index}>
          <Text>{accommodation.name}</Text>
          <Text>{accommodation.address}</Text>
          <Text>{accommodation.numbers}</Text>
          <Text>{accommodation.comment}</Text>
          {accommodation.roomList.map((room, _) => (
            <Box key={room.id}>
              <Text>{room.roomType}</Text>
              <Text>{room.roomTypeName}</Text>
              {`${room.roomPrice.toLocaleString('ko-KR', {
                style: 'decimal',
                currency: 'KRW',
              })}원`}
              <Text>{room.roomExtraPrice}</Text>
              <Text>{room.roomStock}</Text>
              <Text>{room.roomDefaultGuest}</Text>
              <Text>{room.roomMaxGuest}</Text>
              <Text>{room.comment}</Text>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default AccommodationItem;
