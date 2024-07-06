import { NavigateFunction } from 'react-router-dom';

export type ToastAlertProps = {
  title: string;
  description: string;
  status?: 'info' | 'success' | 'error';
  duration?: number;
  isClosable?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  navigate?: NavigateFunction;
};
