import { Routes, Route } from "react-router-dom";
import Notes from "./Notes";
import Etudiants from "./Etudiants";
import Matieres from "./Matieres";
import APropos from "./Apropos";

function MenuContent() {
  return (
    <Routes>
      <Route path="/notes" element={<Notes />} />
      <Route path="/etudiants" element={<Etudiants />} />
      <Route path="/matieres" element={<Matieres />} />
      <Route path="/apropos" element={<APropos />} />
    </Routes>
  );
}

export default MenuContent;
