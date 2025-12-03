// AdminRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/UserContext";

export default function AdminRoute({ children }) {
  const { usuario } = useAuthContext();
  console.log(usuario)
  if (!usuario) return <Navigate to="/login" replace />;

  if (usuario.nombre !== "admin") return <Navigate to="/no-autorizado" replace />;

  return children;
}