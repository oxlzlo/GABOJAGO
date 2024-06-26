import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode, RefObject } from 'react';

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  maxWidth?: string;
  height?: string;
};

export const ReservationModal = ({
  isOpen,
  onClose,
  title,
  body,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  maxWidth = '45rem',
  height = 'auto',
}: ReservationModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth={maxWidth} height={height} borderRadius="0.8rem">
        <ModalHeader marginTop="1.5rem" fontSize="2rem" fontWeight="600">
          {title}
        </ModalHeader>
        <ModalCloseButton fontSize="1rem" />
        <ModalBody fontSize="1.6rem" color="black">
          {body}
        </ModalBody>
        <ModalFooter marginTop="1.5rem">
          <Button onClick={onClose} fontSize="1.8rem" padding="1.5rem" _hover={{ background: 'grayLight' }}>
            {cancelButtonText || 'No'}
          </Button>
          <Button
            onClick={onConfirm}
            background="main"
            color="white"
            marginLeft="1rem"
            fontSize="1.8rem"
            padding="1.5rem"
            _hover={{
              background: 'primaryHover',
            }}>
            {confirmButtonText || 'Yes'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
