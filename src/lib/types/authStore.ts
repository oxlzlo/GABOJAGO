export type User = {
  email: string;
  name: string;
};

export type AuthState = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  loadUserFromLocalStorage: () => void;
};
