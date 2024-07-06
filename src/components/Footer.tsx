import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box padding="2.5rem" backgroundColor="garyDark">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box display="flex" justifyContent="center" alignItems="center" padding="1rem">
          <Text fontSize="3rem" color="main" fontWeight="900">
            GABOJAGO 플랫폼
          </Text>
        </Box>
        <Text fontSize="1.8rem" color="white">
          온라인 여행 및 관련 서비스 분야이고, 사용자와 거리를 좁히고 친근하게 다가갑니다.
        </Text>
        <Box display="flex" justifyContent="center" padding="1rem">
          <Link to="https://github.com/your-username/your-repository">
            <Text
              fontSize="1.8rem"
              color="white"
              _hover={{
                color: 'main',
                textDecoration: 'underline',
              }}>
              GitHub 레포지토리 방문하기
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
