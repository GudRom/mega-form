import { Link } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useData } from "../../context/DataContext";
import Swal from "sweetalert2";
import { useState } from "react";
import Confetti from "react-confetti";

const Result = () => {
  const [success, setSuccess] = useState(false);
  const { data } = useData();
  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const { files } = data;

  const onSubmit = () => {
    console.log("click");
    Swal.fire("Great job", "You've passed the challenge", "success");
    setSuccess(true);
  };

  if (success) {
    return <Confetti />;
  }
  return (
    <MainContainer>
      <Typography component={"h2"} variant="h5">
        📋 Form Values
      </Typography>
      <TableContainer sx={{ marginBottom: "30px" }}>
        <Table sx={{ marginBottom: "30px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align="right">{entry[1]?.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component={"h2"} variant="h5">
            📦 Files
          </Typography>
          <List>
            {files.map((f, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={f.name}
                  secondary={f.size}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Button
        onClick={onSubmit}
        fullWidth
        variant="contained"
        color="success"
        sx={{ margin: "10px 0 8px" }}
      >
        Submit
      </Button>
      <Link to={"/"}>Start Over</Link>
    </MainContainer>
  );
};

export default Result;
