import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
} from '@chakra-ui/react';

type Lodgment = {
  id: string;
  thumbnail: string;
  price: number;
  name: string;
  address: string;
  numbers: string;
  comment: string;
  roomList: Rooms[];
};

type Rooms = {
  id: string;
  imageList: string[];
  roomType: string;
  roomTypeName: string;
  roomPrice: number;
  roomExtraPrice: number;
  roomStock: number;
  roomDefaultGuest: number;
  roomMaxGuest: number;
  comment: string;
};

interface RoomDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lodgment: Lodgment;
}

const RoomDetailModal = ({ isOpen, onClose, lodgment }: RoomDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="45rem" height="auto" borderRadius="0.8rem">
        <ModalHeader marginTop="1.5rem" fontSize="2rem" fontWeight="600">
          {lodgment?.name}
        </ModalHeader>
        <ModalCloseButton fontSize="1rem" />
        <ModalBody fontSize="1.6rem" color="black">
          <Image src={lodgment?.thumbnail} alt={lodgment?.name} width="100%" height="auto" marginBottom="1rem" />
          <Text fontSize="1.6rem">{lodgment?.address}</Text>
          <Text fontSize="1.6rem" fontWeight="600">
            {lodgment?.numbers}
          </Text>
          <Text marginTop="2rem" fontWeight="600" fontSize="2rem" borderBottom="1px solid" borderColor="grayLight">
            숙소 소개
          </Text>
          <Text fontSize="1.8rem" marginBottom="2rem" color="gray">
            {lodgment?.comment}
          </Text>
          <Text display="flex" justifyContent="end" color="red" fontSize="2.5rem" fontWeight="600" marginBottom="2rem">
            {lodgment &&
              `${lodgment.price.toLocaleString('ko-KR', {
                style: 'decimal',
                currency: 'KRW',
              })}원`}
          </Text>
        </ModalBody>
        <ModalFooter marginTop="1.5rem">
          <Button onClick={onClose} fontSize="1.8rem" padding="1.5rem" _hover={{ background: 'grayLight' }}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RoomDetailModal;
