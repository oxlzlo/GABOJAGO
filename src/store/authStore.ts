import create from 'zustand';
import { User, AuthState } from '../lib/types/authStore';
import { useEffect } from 'react';

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userData: User) => {
    set({ user: userData });
    localStorage.setItem('email', userData.email);
    localStorage.setItem('password', userData.password);
    localStorage.setItem('name', userData.name);
    localStorage.setItem('phone_number', userData.phone_number);
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('name');
    localStorage.removeItem('phone_number');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
  loadUserFromLocalStorage: () => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const name = localStorage.getItem('name');
    const phone_number = localStorage.getItem('phone_number');
    if (email && password && name && phone_number) {
      set({ user: { email, password, name, phone_number } });
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
