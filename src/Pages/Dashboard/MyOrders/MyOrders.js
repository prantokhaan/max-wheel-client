import React from 'react';
import { Button, Container,  Paper,  Table,  TableBody,  TableCell,  tableCellClasses,  TableContainer,  TableHead,  TableRow,  Typography } from "@mui/material";
import useAuth from '../../../Hooks/useAuth';
import { Box, styled } from '@mui/system';

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
    color: 'white'
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const MyOrders = () => {
  const {user} = useAuth();
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://calm-plateau-72250.herokuapp.com/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, [orders?.length, user?.email]);

  const handleCancel = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order?"
    );
    if (proceed) {
      fetch(`https://calm-plateau-72250.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount) {
            alert("The Order is Cancelled Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
    return (
      <React.Fragment>
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
            My Orders: {orders.length}
          </Typography>
        </Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Order Id</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                <StyledTableCell align="right">Cancel</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row._id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.purchasedCar.name}
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
                    {row.purchasedCar.price}$
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      onClick={() => handleCancel(row._id)}
                      style={{ fontSize: "24px", color: "red" }}
                    >
                      <i className="fas fa-window-close"></i>
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
};

export default MyOrders;