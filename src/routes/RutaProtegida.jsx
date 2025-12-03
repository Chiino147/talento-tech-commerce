import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/UserContext";

export default function RutaProtegida({ children }) {
  const { isAuthenticated } = useAuthContext();

  // si NO está logueado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children; // deja entrar
}