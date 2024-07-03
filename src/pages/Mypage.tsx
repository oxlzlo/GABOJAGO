import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Profile from '../assets/설이.jpeg';
import EditProfile from '../assets/eidt_profile.svg?react';
import { useAuth } from '@/store/authStore';
import emotionStyled from '@emotion/styled';

const Mypage = () => {
  const { user } = useAuth();

  return (
    <Box marginTop="8.3vh" height="100vh" backgroundColor="background">
      <Flex justify="center" align="center">
        <Box width="41.7vw" height="100vh" backgroundColor="white">
          <Flex flexDirection="column" justify="center" align="center" gap="2vh">
            <Box width="200px" height="200px" marginTop="10vh" borderRadius="50%" overflow="hidden">
              <img src={Profile} className="profile_img"></img>
            </Box>
            <Box width="35vw" height="60vh" marginTop="3vh">
              <Flex justify="space-between" align="center">
                <Text fontSize="2rem" color="main">
                  Name
                </Text>
                <TextBox>{user?.name}</TextBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text fontSize="2rem" color="main">
                  Account
                </Text>
                <TextBox>{user?.email}</TextBox>
              </Flex>
              <Box margin="3vh 0 3vh 0" border=".1rem solid var(--color-main)" borderBottom="none"></Box>
              <Flex justify="space-between" align="center">
                <Text fontSize="2rem" color="main">
                  Phone Number
                </Text>
                <InputBox type="number" placeholder={user?.phoneNumber}></InputBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text fontSize="2rem" color="main">
                  Password
                </Text>
                <InputBox type="password" placeholder="Password *"></InputBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text fontSize="2rem" color="main">
                  New Password
                </Text>
                <InputBox type="password" placeholder="New Password *"></InputBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text fontSize="2rem" color="main">
                  New Password (confirm)
                </Text>
                <InputBox type="password" placeholder="Confirm New Password *" />
              </Flex>
              <Button
                width="35vw"
                height="5vh"
                marginTop="4.5vh"
                fontSize="2rem"
                backgroundColor="main"
                color="white"
                borderRadius=".5rem"
                _hover={{ border: '.1rem solid var(--color-main)', bg: 'background', color: 'main' }}>
                Edit
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mypage;

const TextBox = emotionStyled.div`
  width: 60%;
  padding: 1vh 1vw;
  margin-top: 1.5vh;
  font-size: 2rem;
  color: var(--color-main);
  border: .1rem solid var(--color-main);
  border-radius: .5rem;
`;

const InputBox = emotionStyled.input`
  width: 60%;
  padding: 1vh 1vw;
  margin-bottom: 1.5vh;
  font-size: 2rem;
  border: .1rem solid var(--color-main);
  border-radius: .5rem;
  color: var(--color-main);
  outline: none;
`;
