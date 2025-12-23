import React from "react";
import { NavLink } from "react-router-dom";
import reactLogo from "../assets/react.svg";

function Header() {
  const menuItems = [
    { label: "Notes", path: "/notes" },
    { label: "Etudiants", path: "/etudiants" },
    { label: "Matières", path: "/matieres" },
    { label: "A propos", path: "/apropos" }
  ];

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px 40px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#f8f9fa"
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", alignSelf: "flex-start" }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            style={({ isActive }) => ({
              padding: "8px 12px",
              borderRadius: "5px",
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "#007bff",
              fontWeight: "bold",
              transition: "background-color 0.3s",
              fontSize: "14px"
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div style={{ textAlign: "center", flexGrow: 1 }}>
        <img
          src={reactLogo}
          alt="React logo"
          style={{ width: "80px", marginBottom: "10px" }}
        />
        <h3 style={{ margin: "5px 0", color: "#333" }}>Introduction à React</h3>
        <h4 style={{ margin: "5px 0", color: "#666" }}>A la découverte des premières notions de React</h4>
      </div>

      <div style={{ width: "200px" }}></div>
    </header>
  );
}

export default Header;
