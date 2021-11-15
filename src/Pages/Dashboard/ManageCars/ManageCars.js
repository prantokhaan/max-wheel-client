import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useCars from "../../../Hooks/useCars";
import { Button, Container, tableCellClasses } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4361EE",
    color: "white",
    fontFamily: `'Poppins', sans-serif`,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontFamily: `'Poppins', sans-serif`,
  },
}));




function Row({car}) {
  const [open, setOpen] = React.useState(false);
  const [cars, setCars] = React.useState([])

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this car?"
    );
    if (proceed) {
      fetch(`https://calm-plateau-72250.herokuapp.com/deleteCar/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount) {
            alert("The Car is Deleted Successfully");
            const remainingCars = cars.filter((car) => car._id !== id);
            setCars(remainingCars);
          }
        });
    }
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <StyledTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {car.name}
        </StyledTableCell>
        <StyledTableCell align="right">{car.price}$</StyledTableCell>
        <StyledTableCell align="right">{car.rating}</StyledTableCell>
        <StyledTableCell align="right">{car.horsepower}</StyledTableCell>
        <StyledTableCell align="right">
          <Button
            onClick={() => handleDelete(car._id)}
            style={{ color: "red" }}
          >
            <DeleteForeverIcon />
          </Button>
        </StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Seats</StyledTableCell>
                    <StyledTableCell>Milage in City</StyledTableCell>
                    <StyledTableCell align="right">Milage in HWY</StyledTableCell>
                    <StyledTableCell align="right">Total price</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={car.id}>
                    <StyledTableCell component="th" scope="row">
                      {car.seat}
                    </StyledTableCell>
                    <StyledTableCell>{car.milageCity}</StyledTableCell>
                    <StyledTableCell align="right">{car.milageHighway}</StyledTableCell>
                    <StyledTableCell align="right">
                      {car.price}$
                    </StyledTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </StyledTableCell>
      </TableRow>
    </React.Fragment>
  );
}





export default function ManageCars() {
    const [cars] = useCars();
  return (
    <Container style={{ marginTop: "-80px" }}>
      <Typography
        variant="h4"
        style={{
          fontFamily: `'Oswald', sans-serif`,
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: 500,
          paddingTop: "20px",
          color: "#393343",
          paddingBottom: "20px",
          backgroundColor: "white",
          borderBottom: "2px solid gray",
          marginBottom: "20px",
        }}
      >
        Manage Cars
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Car Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Rating</StyledTableCell>
              <StyledTableCell align="right">HorsePower</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => (
              <Row key={car.name} car={car} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
