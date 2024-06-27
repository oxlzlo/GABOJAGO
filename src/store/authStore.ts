import create from 'zustand';
import { User, AuthState } from '../lib/types/authStore';
import { useEffect } from 'react';

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userData: User) => {
    set({ user: userData });
    localStorage.setItem('email', userData.email);
    localStorage.setItem('name', userData.name);
  },
  loadUserFromLocalStorage: () => {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    if (email && name) {
      set({ user: { email, name } });
    }
  },
}));

export const useAuth = () => {
  const { user, login, loadUserFromLocalStorage } = useAuthStore();

  useEffect(() => {
    loadUserFromLocalStorage();
  }, [loadUserFromLocalStorage]);
  return { user, login };
};
