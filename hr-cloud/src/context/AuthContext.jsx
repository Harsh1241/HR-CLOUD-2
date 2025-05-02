import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // In a real app, you’d fetch this after login
  const [user, setUser] = useState(null);
  // user = { name: 'Alice', role: 'admin' } or { name: 'Bob', role: 'employee' }

  const login = (username, password) => {
    // stub: replace with real API call
    if (username === 'admin') setUser({ name: 'Admin User', role: 'admin' });
    else setUser({ name: 'Employee User', role: 'employee' });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
