import data from "../data/data.json";
import {
  Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper
} from "@mui/material";

function Matieres() {
  const courses = [...new Set(data.map(item => item.course))];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Matière</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {courses.map((course, index) => (
            <TableRow key={index}>
              <TableCell>{course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Matieres;
