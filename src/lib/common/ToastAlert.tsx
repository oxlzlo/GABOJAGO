import ToastAlertStyle from '@/styles/ToastAlertStyle';
import { useToast } from '@chakra-ui/react';

export const ToastAlert = () => {
  const toast = useToast();

  const showToast = ({ title, description, status = 'info', duration = 7000, isClosable = true }) => {
    const onClose = () => toast.closeAll();
    toast({
      render: () => <ToastAlertStyle title={title} description={description} status={status} onClose={onClose} />,
      duration,
      isClosable,
    });
  };
  return showToast;
};

// export const ToastAlert = () => {
//   const toast = useToast();

//   const showToast = ({ title, description, status = 'info', duration = 7000, isClosable = true }) => {
//     toast({
//       title,
//       description,
//       status,
//       duration,
//       isClosable,
//     });
//   };
//   return showToast;
// };
