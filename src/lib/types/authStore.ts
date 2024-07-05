export type User = {
  email: string;
  password: string;
  name: string;
  phone_number: string;
  img_url: string;
};

export type AuthState = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loadUserFromLocalStorage: () => void;
};
