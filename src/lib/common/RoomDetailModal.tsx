import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';
import { RoomDetailModalProps } from '../types/roomDetailModal';

const RoomDetailModal = ({ isOpen, onClose, selectedRooms }: RoomDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="60rem" height="auto" borderRadius="0.8rem">
        <ModalHeader marginTop="1.5rem" fontSize="2rem" fontWeight="600">
          {selectedRooms?.roomTypeName}
        </ModalHeader>
        <ModalCloseButton fontSize="1rem" />
        <ModalBody fontSize="1.6rem" color="black">
          {selectedRooms?.imageList && selectedRooms.imageList[0] && (
            <Image
              src={selectedRooms.imageList[0].url}
              alt={selectedRooms.roomTypeName}
              width="100%"
              height="auto"
              marginBottom="1rem"
            />
          )}
          <Text fontSize="1.6rem" fontWeight="600">
            기본 인원: {selectedRooms.roomDefaultGuest}명
          </Text>
          <Text fontSize="1.6rem" fontWeight="600">
            최대 인원: {selectedRooms.roomMaxGuest}명
          </Text>
          <Text marginTop="2rem" fontWeight="600" fontSize="2rem" borderBottom="1px solid" borderColor="grayLight">
            객실 소개: {selectedRooms.comment}
          </Text>
          <Text fontSize="1.8rem" marginBottom="2rem" color="gray">
            {selectedRooms.comment}
          </Text>
          <Text display="flex" justifyContent="end" color="red" fontSize="2.5rem" fontWeight="600" marginBottom="2rem">
            {selectedRooms &&
              `${selectedRooms.roomPrice.toLocaleString('ko-KR', {
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
