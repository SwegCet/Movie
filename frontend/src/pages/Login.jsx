import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErr] = useState("");

  if (user) {
    return <Navigate to="/" replace />; // Navigates user to home page
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await login({ email, password });
      navigate("/", { replace: true });
    } catch (error) {
      setErr(error.message || "Login Failed");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Sign in</h2>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="asdf"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
