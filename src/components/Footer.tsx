import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box padding="3rem" backgroundColor="garyDark">
      <Flex justifyContent="center" alignItems="center">
        <Text fontSize="1.8rem" color="white">
          <Box display="flex" justifyContent="center" alignItems="center" padding="1rem">
            <Text fontSize="3rem" color="main" fontWeight="900">
              GABOJAGO 플랫폼
            </Text>
          </Box>
          온라인 여행 및 관련 서비스 분야이고, 사용자와 거리를 좁히고 친근하게 다가갑니다.
          <Box display="flex" justifyContent="center" padding="1rem">
            <Box
              _hover={{
                color: 'main',
                textDecoration: 'underline',
              }}>
              <Link to="https://github.com/your-username/your-repository">GitHub 레포지토리 방문하기</Link>
            </Box>
          </Box>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
