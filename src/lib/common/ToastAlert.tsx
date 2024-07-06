import ToastAlertStyle from '@/styles/ToastAlertStyle';
import { useToast } from '@chakra-ui/react';
import { ToastAlertProps } from '../types/toastAlertProps';
import { useNavigate } from 'react-router-dom';

export const ToastAlert = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const showToast = ({ title, description, status = 'info', duration = 7000, isClosable = true }: ToastAlertProps) => {
    const onClose = () => toast.closeAll();
    toast({
      render: () => (
        <ToastAlertStyle
          title={title}
          description={description}
          status={status}
          onClose={onClose}
          navigate={navigate}
        />
      ),
      duration,
      isClosable,
    });
  };
  return showToast;
};
