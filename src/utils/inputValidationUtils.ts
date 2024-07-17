export const validateEmail = (email: string): boolean => {
  if (email === '') {
    alert('이메일을 입력해주세요.');
    return false;
  }
  return true;
};

export const validatePassword = (password: string): boolean => {
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
    alert('비밀번호는 영어와 숫자를 포함한 8자 이상이어야 합니다.');
    return false;
  }
  return true;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): boolean => {
  if (password !== confirmPassword) {
    alert('패스워드가 일치하지 않습니다.');
    return false;
  }
  return true;
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (!/^\d{2,3}-\d{3,4}-\d{4}$/.test(phoneNumber)) {
    alert('전화번호를 양식에 맞게 입력해주세요.\nex) 00-000-0000\nex) 000-0000-0000');
    return false;
  }
  return true;
};
