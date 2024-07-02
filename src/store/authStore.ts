import create from 'zustand';
import { User, AuthState } from '../lib/types/authStore';
import { useEffect } from 'react';

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userData: User) => {
    set({ user: userData });
    localStorage.setItem('email', userData.email);
    localStorage.setItem('name', userData.name);
    // localStorage.setItem('phoneNumber', userData.phone_number);
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
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
  const { user, login, logout, loadUserFromLocalStorage } = useAuthStore();

  useEffect(() => {
    loadUserFromLocalStorage();
  }, [loadUserFromLocalStorage]);
  return { user, login, logout };
};
