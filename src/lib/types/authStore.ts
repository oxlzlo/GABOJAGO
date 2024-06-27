export type User = {
  email: string;
  name: string;
};

export type AuthState = {
  user: User | null;
  login: (userData: User) => void;
  loadUserFromLocalStorage: () => void;
};
