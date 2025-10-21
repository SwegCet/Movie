import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export default function ProtectedRoutes() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" repalce state={{ from: location }} />;
  }
  return <Outlet />;
}
