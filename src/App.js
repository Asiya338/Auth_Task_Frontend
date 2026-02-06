import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  // If token exists, always show dashboard
  if (localStorage.getItem("token")) {
    return (
      <Dashboard
        onLogout={() => {
          localStorage.removeItem("token");
          setCurrentPage("login");
        }}
      />
    );
  }

  // If not logged in
  return (
    <>
      {currentPage === "login" && (
        <Login
          goToRegister={() => setCurrentPage("register")}
          onLoginSuccess={() => setCurrentPage("dashboard")}
        />
      )}

      {currentPage === "register" && (
        <Register goToLogin={() => setCurrentPage("login")} />
      )}
    </>
  );
}

export default App;
