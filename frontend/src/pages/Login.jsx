import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export default function Login() {
  const { user, login, signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErr] = useState("");
  const [isSignup, setisSignup] = useState(false); // Alternates between login/signup

  if (user) {
    return <Navigate to="/" replace />; // Navigates user to home page
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      if (isSignup) {
        await signup({ email, password });
      } else {
        await login({ email, password });
      }
      //await login({ email, password });
      navigate("/", { replace: true });
    } catch (errorM) {
      setErr(errorM.message || "Login Failed");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>{isSignup ? "Create Account" : "Sign-In"}</h2>
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
            placeholder="password123"
          />
        </label>
        <button type="submit">{isSignup ? "Sign up" : "Login"}</button>

        <p>
          {isSignup ? "Already have an account" : "Don't have an account?"}{" "}
          <button type="button"> {isSignup ? "Login" : "Sign Up"}</button>
        </p>
      </form>
    </div>
  );
}
