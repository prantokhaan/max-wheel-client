import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, styled } from '@mui/system';
import FeaturedCar from '../FeaturedCar/FeaturedCar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useFeaturedCars from '../../../../Hooks/useFeaturedCars';

const FeaturedCars = () => {
  const [featuredCars] = useFeaturedCars()

    

    const ButtonStyled = styled(Button)({
      fontFamily: `'Poppins', sans-serif`,
      fontSize: "16px",
      fontWeight: 500,
      backgroundColor: "#393343",
      border: "2px solid #393343",
      transition: 'all 0.5s ease',

      "&:hover": {
        backgroundColor: "transparent",
        boxShadow: "none",
        color: '#393343',
        fontWeight: 500
      },
    });
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
          Featured Cars
        </Typography>

        <Container style={{ marginTop: "20px" }}>
          <Grid container spacing={4}>
            {featuredCars.map((featuredCar) => (
              <FeaturedCar
                key={featuredCar.id}
                featuredCar={featuredCar}
              ></FeaturedCar>
            ))}
          </Grid>
        </Container>
        <Box style={{ textAlign: "center" }} sx={{ mt: 7 }}>
          <Link to="/explore" style={{textDecoration: 'none'}}>
            <ButtonStyled variant="contained">Explore More</ButtonStyled>
          </Link>
        </Box>
      </Box>
    );
};

export default FeaturedCars;