import { Grid, Paper, Typography, Box, Button, Rating } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ButtonStyled = styled(Button)({
  fontFamily: `'Poppins', sans-serif`,
  fontSize: "14px",
  fontWeight: 500,
  color: "#4361EE",
  backgroundColor: "transparent",
  border: "2px solid #4361EE",
  transition: "all 0.5s ease",

  "&:hover": {
    backgroundColor: "#4361EE",
    boxShadow: "none",
    color: "white",
    fontWeight: 500,
  },
});

const Car = ({ car }) => {
  const { name, price, img, description, rating, _id } = car;
  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={9}
          sx={{ py: 5 }}
          style={{
            boxShadow: "0 8px 16px rgba(0,0,0,.1)",
            borderRadius: "10px",
          }}
        >
          <Box style={{ textAlign: "center" }}>
            <img src={img} alt="" width="200px" height="200px" />
          </Box>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ fontWeight: 600, mt: 2 }}
            style={{
              color: "#130f40",
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: `'Oswald', sans-serif`,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="paragraph"
            gutterBottom
            component="div"
            sx={{ mt: 2, px: 2 }}
            style={{ color: "gray", textAlign: "center" }}
          >
            {description.split('').slice(0, 100).toString().replace(/,/g,'')} <Link to="/explore">..Read More</Link>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: `'Oswald', sans-serif`,
                  color: "#4361ee",
                  fontWeight: 500,
                  marginLeft: "25px",
                  marginTop: "20px",
                }}
              >
                ${price}
              </Typography>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ mt: 3 }}>
                <Rating
                  name="read-only"
                  value={rating}
                  readOnly
                  style={{ color: "#4361EE" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box style={{ textAlign: "center" }} sx={{ mt: 4 }}>
            <Link to={`/purchase/${_id}`} style={{ textDecoration: "none" }}>
              <ButtonStyled variant="contained">Purchase This</ButtonStyled>
            </Link>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Car;
