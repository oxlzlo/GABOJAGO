import client from '@/api/apiConfig';

const token = localStorage.getItem('accessToken');

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
export const fetchUserImgPost = async (formData: FormData) => {
  return client.post('api/user/my-page/image/upload', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};

/**
 * 프로필사진 수정
 * @param formData
 * @param params {oldImageUrl}
 */
export const fetchUserImgPut = async (formData: FormData, oldImageUrl: string) => {
  return client.put('/api/user/my-page/image/update', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    params: {
      oldImageUrl: oldImageUrl,
    },
  });
};

/**
 * 휴대폰번호 재설정
 * @param payload {phone_number}
 */
export const fetchUserEditPhoneNumber = async (payload: { phone_number: string }) => {
  return client.put('/api/user/my-page/change-phone-number', payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
