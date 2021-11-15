

import React from 'react';
import { Button, Collapse, Container, IconButton, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box, styled } from '@mui/system';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontFamily: `'Poppins', sans-serif`,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#f6f6f6",
    color: "black",
    fontFamily: `'Poppins', sans-serif`,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageOrders = () => {
    const [orders, setOrders] = React.useState([]);
    const [isDeleted, setIsDeleted] = React.useState(null);
    const [status, setStatus] = React.useState(["Shipped"]);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        fetch("http://localhost:5000/purchased")
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders?.length, status]);

     const handleDelete = (id) => {
       const proceed = window.confirm(
         "Are you sure, you want to delete this order?"
       );
       if (proceed) {
         fetch(`http://localhost:5000/deleteOrder/${id}`, {
           method: "DELETE",
           headers: { "content-type": "application/json" },
         })
           .then((res) => res.json())
           .then((result) => {
             console.log(result);
             if (result.deletedCount) {
               alert("The Order is Deleted Successfully");
               const remainingOrders = orders.filter(
                 (order) => order._id !== id
               );
               setOrders(remainingOrders);
             }
           });
       }
     };

    const handleStatusUpdate = (id) => {
      const newStatus = ["Shipped"];
      setStatus(newStatus);
      fetch(`http://localhost:5000/updateStatus/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(status),
      })
        .then((res) => res.json())
        .then((result) => {
          alert("Update Successful");
        });
    };

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
          Manage Orders
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell />
                <StyledTableCell>Car Name</StyledTableCell>
                <StyledTableCell align="right">Customer Email</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Update</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            {orders.map((row) => (
              <React.Fragment>
                <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                  <StyledTableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.purchasedCar.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.userEmail}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.status === "pending" ? (
                      <Box
                        style={{
                          backgroundColor: "darkRed",
                          textAlign: "center",
                          color: "white",
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                        sx={{ py: 1, px: 2, ml: 5 }}
                      >
                        {row.status}
                      </Box>
                    ) : (
                      <Box
                        style={{
                          backgroundColor: "green",
                          textAlign: "center",
                          color: "white",
                          fontWeight: 600,
                        }}
                        sx={{ py: 1, px: 2, ml: 5 }}
                      >
                        {row.status}
                      </Box>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.status === "pending" ? (
                      <Button
                        variant="contained"
                        onClick={() => handleStatusUpdate(row._id)}
                      >
                        Ready to Ship
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        disabled
                        onClick={() => handleStatusUpdate(row._id)}
                      >
                        Ready to Ship
                      </Button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      onClick={() => handleDelete(row._id)}
                      style={{ color: "red" }}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>

                <TableRow>
                  <StyledTableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                          Customer Info
                        </Typography>
                        <Table size="small" aria-label="purchases">
                          <TableHead>
                            <StyledTableRow>
                              <StyledTableCell>Name</StyledTableCell>
                              <StyledTableCell>City</StyledTableCell>
                              <StyledTableCell align="right">
                                Address
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                Total price
                              </StyledTableCell>
                            </StyledTableRow>
                          </TableHead>
                          <TableBody>
                            <StyledTableRow>
                              <StyledTableCell component="th" scope="row">
                                {row.userName}
                              </StyledTableCell>
                              <StyledTableCell>{row.userCity}</StyledTableCell>
                              <StyledTableCell align="right">
                                {row.userAddress}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                {row.purchasedCar.price}$
                              </StyledTableCell>
                            </StyledTableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </StyledTableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </Table>
        </TableContainer>
        {/* <Box>
            {orders.map(order => <ManageOrdersTable key={order._id} order={order}></ManageOrdersTable>)}
        </Box> */}
      </Container>
    );
};

export default ManageOrders;
