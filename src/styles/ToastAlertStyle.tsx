import { ToastAlertProps } from '@/lib/types/toastAlertProps';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { Box, Button, CloseButton, Text } from '@chakra-ui/react';

const ToastAlertStyle = ({
  title,
  description,
  status,
  onClose,
  navigate,
}: ToastAlertProps & { onClose: () => void }) => {
  const handleGoToCart = () => {
    navigate?.('/cart');
    onClose();
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="auto"
      height="8rem"
      color="white"
      padding=".8rem"
      background={status === 'success' ? 'green.500' : status === 'error' ? 'red' : 'blue'}
      borderRadius="1rem">
      <Box display="flex" alignItems="center">
        {status === 'success' && <CheckCircleIcon color="white" marginRight="1.2rem" boxSize="1.8rem" />}
        {status === 'error' && <WarningIcon color="white" marginRight="1.2rem" boxSize="1.8rem" />}
        <Box>
          <Text fontSize="1.6rem" fontWeight="900">
            {title}
          </Text>
          <Text fontSize="1.3rem">{description}</Text>
        </Box>
        <Button
          onClick={handleGoToCart}
          fontSize="1.5rem"
          marginLeft="2rem"
          padding="1.8rem"
          color="black"
          background="white"
          _hover={{ backgroundColor: 'grayLight' }}>
          장바구니로 이동
        </Button>
      </Box>
      <Box paddingLeft="1rem" paddingBottom="5rem">
        <CloseButton color="white" onClick={onClose} />
      </Box>
    </Box>
  );
};

export default ToastAlertStyle;
