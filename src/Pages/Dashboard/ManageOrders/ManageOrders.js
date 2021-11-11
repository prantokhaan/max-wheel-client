import React from 'react';
import { Container, Typography } from "@mui/material";
import ManageOrdersTable from './ManageOrdersTable';
import { Box } from '@mui/system';


const ManageOrders = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/purchased")
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
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
        <Box>
            {orders.map(order => <ManageOrdersTable key={order._id} order={order}></ManageOrdersTable>)}
        </Box>
      </Container>
    );
};

export default ManageOrders;