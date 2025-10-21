import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/navBar";
import Login from "./pages/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { MovieProvider } from "./contexts/MovieContext";
import { Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";

function AppShell() {
  // Shared layout for pages
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected app shell*/}
          <Route element={<ProtectedRoutes />}>
            <Route element={<AppShell />}>
              <Route index element={<Home />} />
              <Route path="favorites" element={<Favorites />} />
            </Route>
          </Route>

          {/*Fallback*/}
          <Route path="*" element={<Login />} />
        </Routes>
      </MovieProvider>
    </AuthProvider>
  );
}
