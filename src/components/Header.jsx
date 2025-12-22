import React from "react";
import reactLogo from "../assets/react.svg";

function Header() {
  const menuItems = ["Notes", "Etudiants", "Matières", "A propos"];

  const handleClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  };

  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderBottom: "1px solid #ccc",
      position: "relative"
    }}>
      <nav style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontWeight: "bold"
            }}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Logo et titres au centre */}
      <div style={{ textAlign: "center", flexGrow: 1 }}>
        <img src={reactLogo} className="logo react" alt="React logo" style={{ width: "80px", marginBottom: "10px" }} />
        <h3 style={{ margin: 0 }}>Introduction à React</h3>
        <h4 style={{ margin: 0, fontWeight: "normal", fontSize: "1.2rem" }}>A la découverte des premières notions de React</h4>
      </div>

      {/* Espace vide à droite pour équilibrer */}
      <div style={{ width: "150px" }}></div>
    </header>
  );
}

export default Header;
