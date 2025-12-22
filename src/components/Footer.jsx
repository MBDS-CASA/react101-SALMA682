import React from 'react';

function Footer() {
  const annee = new Date().getFullYear(); // récupère l'année actuelle
  const prenom = "Salma";
  const nom = "Ighirouaiour";

  return (
    <footer style={{
      textAlign: 'center',
      marginTop: '40px',
      padding: '10px 0',
      borderTop: '1px solid #ccc'
    }}>
      © {annee} - {prenom}.{nom}, Tous droits réservés.
    </footer>
  );
}

export default Footer;
