import React from 'react';
import { Container,  Typography } from "@mui/material";


const MyOrders = () => {
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
          My Orders
        </Typography>
        </Container>
    );
};

export default MyOrders;