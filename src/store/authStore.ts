import { create } from 'zustand';
import { User, AuthState } from '../lib/types/authStore';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userData: User) => {
    set({ user: userData });
    localStorage.setItem('email', userData.email);
    localStorage.setItem('password', userData.password);
    localStorage.setItem('name', userData.name);
    localStorage.setItem('phone_number', userData.phone_number);
    localStorage.setItem('img_url', userData.img_url);
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('name');
    localStorage.removeItem('phone_number');
    localStorage.removeItem('img_url');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
  loadUserFromLocalStorage: () => {
    const userData: Partial<User> = {};
    const keys: (keyof User)[] = ['email', 'password', 'name', 'phone_number', 'img_url'];
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      if (value) {
        userData[key] = value;
      }
    });

    if (Object.keys(userData).length > 0) {
      set({ user: userData as User });
    }
  },
}));
