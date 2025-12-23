import data from "../data/data.json";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from "@mui/material";

function Etudiants() {
  // Supprimer les doublons d’étudiants
  const students = Array.from(
    new Map(
      data.map(item => [item.student.id, item.student])
    ).values()
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Prénom</TableCell>
            <TableCell>Nom</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.firstname}</TableCell>
              <TableCell>{s.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Etudiants;
