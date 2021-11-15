import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import banner from '../../../images/home-img.png'
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';


const ButtonStyle = styled(Button)({
  fontFamily: `'Poppins', sans-serif`,
  fontSize: "16px",
  fontWeight: 500,
  backgroundColor: "#393343",
  border: "2px solid #393343",
  transition: "all 0.5s ease",
  padding: '10px 70px',

  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#393343",
    fontWeight: 500,
  },
});

const Banner = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
      <Box sx={{ pb: 4 }}>
        {isMatch ? (
          <Box>
            <Box
              style={{ textAlign: "center", overflow: "hidden" }}
              sx={{ mt: 25 }}
            >
              <img src={banner} alt="" width="480px" />
            </Box>
            <Typography
              variant="h2"
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: "-300px",
                fontFamily: `'Oswald', sans-serif`,
                fontWeight: 400,
                color: "#393343",
              }}
            >
              Find your Car
            </Typography>
            <Box style={{ textAlign: "center", marginTop: "250px" }}>
              <Link
                to="/explore"
                style={{
                  textDecoration: "none",
                }}
              >
                <ButtonStyle variant="contained">Explore Cars</ButtonStyle>
              </Link>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box
              style={{ textAlign: "center", overflow: "hidden" }}
              sx={{ mt: 25 }}
            >
              <img src={banner} alt="" />
            </Box>
            <Typography
              variant="h2"
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: "-450px",
                fontFamily: `'Oswald', sans-serif`,
                fontWeight: 400,
                color: "#393343",
              }}
            >
              Find your Car
            </Typography>
            <Box style={{ textAlign: "center", marginTop: "390px" }}>
              <Link
                to="/explore"
                style={{
                  textDecoration: "none",
                }}
              >
                <ButtonStyle variant="contained">Explore Cars</ButtonStyle>
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    );
};

export default Banner;