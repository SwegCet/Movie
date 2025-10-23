import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("auth_token");
    if (saved) setUser({ token: saved });
  }, []);

  const login = async ({ email, password }) => {
    if (!email || !password) {
      // Temporary validity check, will swap LATER
      throw new Error("Email & Password Required");
    }
    const token = `demo-${Date.now()}`;
    localStorage.setItem("auth_token", token);
    setUser({ email, token });
  };

  const signup = async ({ email, password }) => {
    if (!email || !password) {
      // Temporary validity check, will swap LATER
      throw new Error("Email & Password Required");
    }
    const token = `demo-${Date.now()}`;
    localStorage.setItem("auth_token", token);
    setUser({ email, token });
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
  };

  const value = useMemo(() => ({ user, login, signup, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside <AuthProvider>");
  return ctx;
}
