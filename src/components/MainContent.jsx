import React, { useState, useEffect } from 'react';
function MainContent() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // nettoyage à la destruction du composant
  }, []);

  const jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

  const jour = jours[currentTime.getDay()];
  const moisNom = mois[currentTime.getMonth()];
  const annee = currentTime.getFullYear();
  const heure = String(currentTime.getHours()).padStart(2,'0');
  const minute = String(currentTime.getMinutes()).padStart(2,'0');
  const seconde = String(currentTime.getSeconds()).padStart(2,'0');

  return (
    <main style={{ textAlign: 'center', margin: '20px 0' }}>
      Bonjour, on est le {jour}, {moisNom}, {annee} et il est {heure}:{minute}:{seconde}
    </main>
  );
}
export default MainContent;