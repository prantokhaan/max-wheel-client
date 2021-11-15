import { Alert, Button, Container, Grid, Input, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../Shared/Loading';
import PurchasedCarInfo from './PurchasedCarInfo/PurchasedCarInfo';
import useCars from './../../Hooks/useCars';

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

const PurchasedCar = ({ purchasedCar }) => {
  const { name } = purchasedCar;
  const [cars] = useCars()
  console.log(name);
  const { user } = useAuth();
  const defaultInfo = {
    userEmail: user?.email,
    userName: user?.displayName,
    userPhoneNumber: "",
  };
  const [purchaseInfo, setPurchaseInfo] = React.useState(defaultInfo);
  const [isPurchased, setIsPurchased] = React.useState(false);


  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const finalInfo = { ...purchaseInfo };
    finalInfo[field] = value;
    setPurchaseInfo(finalInfo);
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const purchase = {
      ...purchaseInfo,
      purchasedCar: purchasedCar,
      status: "pending",
    };
    fetch("http://localhost:5000/purchased", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId !== ''){
          setIsPurchased(true);
          e.target.reset()
        }
      });
  };
  return (
    <div>
      {!cars.length ? (
        <Loading></Loading>
      ) : (
        <Container>
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
            purchase - {name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
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
                Fill out these to place your order
              </Typography>
              <form onSubmit={handlePurchase}>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: `'Poppins', sans-serif`,
                    fontWeight: 500,
                    paddingTop: "8px",
                    color: "#393343",
                    marginBottom: "15px",
                    backgroundColor: "white",
                  }}
                >
                  Personal Information
                </Typography>
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Car Name"
                  id="fullWidth"
                  defaultValue={name}
                  sx={{ mb: 3 }}
                  disabled
                />
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Your Name"
                  id="fullWidth"
                  name="userName"
                  defaultValue={user?.displayName}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Your Email"
                  id="fullWidth"
                  name="userEmail"
                  defaultValue={user?.email}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Your Phone Number"
                  id="fullWidth"
                  name="userPhoneNumber"
                  type="number"
                  sx={{ mb: 3 }}
                />
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: `'Poppins', sans-serif`,
                    fontWeight: 500,
                    paddingTop: "5px",
                    color: "#393343",
                    marginBottom: "10px",
                    backgroundColor: "white",
                  }}
                >
                  Address
                </Typography>
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Your Country"
                  id="fullWidth"
                  name="userCountry"
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Your City"
                  name="userCity"
                  id="fullWidth"
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Address Line"
                  name="userAddress"
                  id="fullWidth"
                  sx={{ mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  onBlur={handleOnBlur}
                  label="Postal Code"
                  name="userPostal"
                  id="fullWidth"
                  sx={{ mb: 3 }}
                  required
                />
                <ButtonStyled type="submit" variant="contained">
                  Purchase Now
                </ButtonStyled>
                <Box>
                  {isPurchased && (
                    <Alert severity="success" color="info" sx={{  mt: 2 }}>
                      Your Car Purchased Successfully
                    </Alert>
                  )}
                </Box>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <PurchasedCarInfo
                key={purchasedCar._id}
                purchasedCar={purchasedCar}
              ></PurchasedCarInfo>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default PurchasedCar;