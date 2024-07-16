import client from '@/api/apiConfig';

/**
 * 회원가입
 * @param payload {email, name, phone_number, password}
 */
export const fetchUserRegister = (payload: { email: string; name: string; phone_number: string; password: string }) => {
  return client.post('/open-api/user/register', payload);
};

/**
 * 로그인
 * @param payload {email, password}
 */
export const fetchUserLogin = (payload: { email: string; password: string }) => {
  return client.post('/open-api/user/login', payload);
};

/**
 * 아이디 찾기
 * @param username
 * @param phoneNumber
 */
export const fetchUserFindId = async (username: string, phoneNumber: string) => {
  return client.get('/open-api/user/find-email', {
    params: {
      username,
      phoneNumber,
    },
  });
};

/**
 * 패스워드 재설정
 * @param payload {email, password}
 */
export const fetchUserResetPw = async (payload: { email: string; password: string }) => {
  return client.put('/open-api/user/change-password', payload);
};

/**
 * 프로필사진 등록
 * @param formData
 */
export const fetchUserImgChange = async (formData: FormData) => {
  const token = localStorage.getItem('accessToken');
  return client.post('api/user/my-page/image/upload', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};
