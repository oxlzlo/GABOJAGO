import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import Profile from '../assets/default_profile.png';
import { useAuth } from '@/store/authStore';
import emotionStyled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Mypage = () => {
  const { user, login } = useAuth();

  const [editPhoneNumber, setEditPhoneNumber] = useState(user?.phone_number || '');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imgUrl, setImgUrl] = useState(user?.img_url);

  const token = localStorage.getItem('accessToken');

  const fileInputRef = useRef(null);

  const handleEditInfo = async () => {
    if (password !== user?.password) {
      alert('기존 패스워드를 확인해주세요.');
    }

    if (editPhoneNumber !== user?.phone_number) {
      if (!/^\d{2,3}-\d{3,4}-\d{4}$/.test(editPhoneNumber)) {
        alert('전화번호를 양식에 맞게 입력해주세요.\nex) 00-000-0000\nex) 000-0000-0000');
        return;
      }

      const payload = {
        phone_number: editPhoneNumber,
      };

      try {
        const response = await axios.put(
          'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/api/user/my-page/change-phone-number',
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (response.data.result_code === '200') {
          alert('정상적으로 변경되었습니다.');
          console.log(editPhoneNumber);
          console.log(response);
          login({ ...user, phone_number: editPhoneNumber });
        } else {
          alert('수정에 실패하였습니다.');
          console.error(response.data.error.error_message);
        }
      } catch (error) {
        console.error('프로필 수정 에러', error);
      }
    }

    if (password == user?.password) {
      if (newPassword !== confirmPassword) {
        alert('패스워드가 일치하지 않습니다.');
        return;
      }
      const payload = {
        email: user?.email,
        password: newPassword,
      };

      console.log(payload);

      try {
        const response = await axios.put(
          'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/open-api/user/change-password',
          payload,
        );
        if (response.data.result_code === '200') {
          console.log(response);
          alert('정상적으로 변경되었습니다.');
        }
      } catch (error) {
        console.error('프로필 수정 에러', error);
      }
    }
  };

  const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleEditInfo();
    }
  };

  const handleProfileImgClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImgPost = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('imageFile', file);

      try {
        const response = await axios.post(
          'http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/api/user/my-page/image/upload',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        if (response.data.result_code === '200') {
          alert('프로필 사진이 등록되었습니다.');
          const newImgUrl = response.data.data;
          setImgUrl(newImgUrl);
          login({ ...user, img_url: newImgUrl });
        } else {
          alert('프로필 사진이 등록되지 않았습니다.');
          console.error(response.data.error.error_message);
        }
      } catch (error) {
        console.error('프로필 업로드 에러', error);
      }
    }
  };

  return (
    <Box marginTop="8.3vh" height="100vh" backgroundColor="background">
      <Flex justify="center" align="center">
        <Box width="41.7vw" height="100vh" backgroundColor="white">
          <Flex flexDirection="column" justify="center" align="center" gap="2vh">
            <Box
              width="200px"
              height="200px"
              marginTop="10vh"
              borderRadius="50%"
              backgroundColor="background"
              overflow="hidden"
              cursor="pointer"
              onClick={handleProfileImgClick}>
              <img src={imgUrl} className="profile_img" alt="Profile"></img>
              <Input type="file" ref={fileInputRef} display="none" onChange={handleImgPost} />
            </Box>
            <Box width="35vw" height="60vh" marginTop="3vh">
              <Flex justify="space-between" align="center">
                <Text width="40%" fontSize="2rem" color="main">
                  Name
                </Text>
                <TextBox>{user?.name}</TextBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text width="40%" fontSize="2rem" color="main">
                  Account
                </Text>
                <TextBox>{user?.email}</TextBox>
              </Flex>
              <Box margin="3vh 0 3vh 0" border=".1rem solid var(--color-main)" borderBottom="none"></Box>
              <Flex justify="space-between" align="center">
                <Text width="40%" fontSize="2rem" color="main">
                  Phone Number
                </Text>
                <InputBox
                  type="text"
                  placeholder={user?.phone_number}
                  value={editPhoneNumber}
                  onChange={(e) => setEditPhoneNumber(e.target.value)}
                  onKeyPress={handleKeypress}></InputBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text width="40%" fontSize="2rem" color="main">
                  Password
                </Text>
                <InputBox
                  type="password"
                  placeholder="Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeypress}></InputBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text width="40%" fontSize="2rem" color="main">
                  New Password
                </Text>
                <InputBox
                  type="password"
                  placeholder="New Password *"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  onKeyPress={handleKeypress}></InputBox>
              </Flex>
              <Flex justify="space-between" align="center">
                <Text width="21%" fontSize="2rem" color="main">
                  New Password
                </Text>
                <Text width="19%" fontSize="1.5rem" color="main">
                  (confirm)
                </Text>
                <InputBox
                  type="password"
                  placeholder="Confirm New Password *"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyPress={handleKeypress}
                />
              </Flex>
              <Button
                width="35vw"
                height="5vh"
                marginTop="4.5vh"
                fontSize="2rem"
                backgroundColor="main"
                color="white"
                borderRadius=".5rem"
                _hover={{ border: '.1rem solid var(--color-main)', bg: 'background', color: 'main' }}
                onClick={handleEditInfo}>
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
