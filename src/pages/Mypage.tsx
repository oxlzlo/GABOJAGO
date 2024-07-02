import { Box, Flex, Input, Text } from '@chakra-ui/react';
import Profile from '../assets/설이.jpeg';
import { useAuth } from '@/store/authStore';
import emotionStyled from '@emotion/styled';

const Mypage = () => {
  const { user } = useAuth();

  return (
    <Box marginTop="8.3vh" height="100vh" backgroundColor="aqua">
      <Flex justify="center" align="center">
        <Box margin="8vh 2vw" width="80%" height="84vh" backgroundColor="pink">
          <Flex flexDirection="column" justify="center" align="center" gap="2vh">
            <Box width="20vw" height="39vh" borderRadius="50%" overflow="hidden">
              <img src={Profile} className="profile_img"></img>
            </Box>
            <Box width="20vw" height="40vh" marginTop="3vh" backgroundColor="beige">
              <TextBox>{user?.email}</TextBox>
              <TextBox>{user?.name}</TextBox>
              {/* <TextBox>{user?.phoneNumber}</TextBox> */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mypage;

const TextBox = emotionStyled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%;
  font-size: 2rem;
  border: .1rem solid var(--color-main);
  border-radius: 1rem;
`;
