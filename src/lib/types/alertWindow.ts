export type AlertWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  body: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: () => void;
  leastDestructiveRef: React.RefObject<HTMLButtonElement>;
  maxWidth?: string;
  height?: string;
};
