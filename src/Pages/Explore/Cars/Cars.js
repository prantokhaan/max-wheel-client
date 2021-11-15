import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Car from "../Car/Car";
import useCars from "../../../Hooks/useCars";

const Cars = () => {
  const [cars] = useCars();

  
  return (
    <Box style={{ backgroundColor: "#EEEEEE" }} sx={{ pb: 5 }}>
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
        }}
      >
        Available Cars
      </Typography>

      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={4}>
          {cars.map((car) => (
            <Car
              key={car.id}
              car={car}
            ></Car>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Cars;
