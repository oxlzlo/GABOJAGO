import { useAuthStore } from '@/store/authStore';
import { useEffect } from 'react';

export const useAuth = () => {
  const { user, login, logout, loadUserFromLocalStorage } = useAuthStore();

  useEffect(() => {
    loadUserFromLocalStorage();
  }, [loadUserFromLocalStorage]);
  return { user, login, logout };
};
