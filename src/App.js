import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("login");

  const logout = () => {
    localStorage.removeItem("token");
    setPage("login");
  };

  if (localStorage.getItem("token")) {
    return <Dashboard onLogout={logout} />;
  }

  return page === "login" ? (
    <Login onLogin={() => setPage("dashboard")} />
  ) : (
    <Register onRegister={() => setPage("login")} />
  );
}

export default App;
