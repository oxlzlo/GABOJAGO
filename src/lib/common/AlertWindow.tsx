import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { AlertWindowProps } from '../types/alertWindow';

export const AlertWindow = ({
  isOpen,
  onClose,
  title,
  body,
  confirmButtonText,
  cancelButtonText,
  onConfirm,
  leastDestructiveRef,
  maxWidth = '30rem',
  height = 'auto',
}: AlertWindowProps) => {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={leastDestructiveRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent maxWidth={maxWidth} height={height} borderRadius="0.8rem">
        <AlertDialogHeader marginTop="1.5rem" fontSize="2rem" fontWeight="600">
          {title}
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody fontSize="1.3rem" color="gray">
          {body}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button fontSize="1.5rem" ref={leastDestructiveRef} onClick={onClose}>
            {cancelButtonText || 'No'}
          </Button>
          <Button background="main" color="white" marginLeft="2rem" fontSize="1.5rem" onClick={onConfirm}>
            {confirmButtonText || 'Yes'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
