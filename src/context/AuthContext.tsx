import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string;
  name: string;
}

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    if (email && name) {
      setUser({ email, name });
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('name', userData.name);
  };

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
