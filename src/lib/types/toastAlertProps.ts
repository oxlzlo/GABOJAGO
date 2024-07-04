export type ToastAlertProps = {
  title: string;
  description: string;
  status?: 'info' | 'success' | 'error';
  duration?: number;
  isClosable?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};
