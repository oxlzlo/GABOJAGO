import { ToastAlertProps } from '@/lib/types/toastAlertProps';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { Box, CloseButton, Text } from '@chakra-ui/react';

const ToastAlertStyle = ({ title, description, status, onClose }: ToastAlertProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between" // 닫기 버튼을 오른쪽 끝으로 이동
    color="white"
    padding="1.5rem"
    background={status === 'success' ? 'green.500' : status === 'error' ? 'red' : 'blue'}
    borderRadius="1rem">
    <Box display="flex" alignItems="center">
      {status === 'success' && <CheckCircleIcon color="white" marginRight="1.2rem" boxSize="1.8rem" />}
      {status === 'error' && <WarningIcon color="white" marginRight="1.2rem" boxSize="1.8rem" />}
      <Box>
        <Text fontSize="1.8rem" fontWeight="900">
          {title}
        </Text>
        <Text fontSize="1.3rem">{description}</Text>
      </Box>
    </Box>
    <CloseButton paddingLeft="2rem" paddingBottom="3rem" color="white" onClick={onClose} />
  </Box>
);

export default ToastAlertStyle;
