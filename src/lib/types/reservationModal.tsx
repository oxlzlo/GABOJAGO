import { ReactNode } from 'react';

export type ReservationModalProps = {
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
