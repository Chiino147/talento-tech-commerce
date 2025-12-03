import React, { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  // Verificar token al cargar la página
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const emailGuardado = localStorage.getItem("authEmail");
    if (token) {
      const username = token.replace("fake-token-", "");
      setUsuario({
        nombre: username,
        email: emailGuardado || "",
      });
    }
  }, []);

  // Logear usuario
  const iniciarSesion = (username, email) => {
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);
    localStorage.setItem("authEmail", email);
    setUsuario({
      nombre: username,
      email,
    });
  };

  // Cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authEmail");
    setUsuario(null);
  };

  const value = {
    usuario,
    iniciarSesion,
    cerrarSesion,
    isAuthenticated: !!usuario,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// Hook personalizado para acceder al contexto
export function useAuthContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de LoginProvider");
  }
  return context;
}