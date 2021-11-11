import { Box, Divider, Rating, Typography } from '@mui/material';
import React from 'react';

const PurchasedCarInfo = ({ purchasedCar }) => {
  const {
    name,
    img,
    description,
    seat,
    milageCity,
    milageHighway,
    driveTrain,
    horsepower,
    rating,
    price,
    whyBuy,
  } = purchasedCar;
  return (
    <Box sx={{ ml: 3, mt: 2 }}>
      <Box
        style={{
          textAlign: "center",
          borderBottom: "2px solid gray",
          paddingBottom: "30px",
          borderRadius: "10px",
        }}
      >
        <img src={img} alt="" width="400px" style={{ borderRadius: "10px" }} />
      </Box>
      <Box
        style={{
          textAlign: "center",
          borderBottom: "2px solid gray",
          paddingBottom: "10px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ fontWeight: 600, mt: 2 }}
          style={{
            color: "#4361ee",
            textAlign: "center",
            textTransform: "uppercase",
            fontFamily: `'Oswald', sans-serif`,
          }}
        >
          ${price}
        </Typography>
        <Divider />
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
          {description}
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "center",
          borderBottom: "2px solid gray",
          paddingBottom: "10px",
        }}
      >
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
          Why Should you Buy?
        </Typography>
        <Typography
          variant="paragraph"
          gutterBottom
          component="div"
          sx={{ mt: 2, px: 2 }}
          style={{ color: "gray", textAlign: "center" }}
        >
          {whyBuy}
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "center",
          borderBottom: "2px solid gray",
          paddingBottom: "10px",
        }}
      >
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
          Specifications
        </Typography>
        <Typography
          variant="paragraph"
          gutterBottom
          component="div"
          sx={{ mt: 2, px: 2 }}
          style={{ color: "gray", textAlign: "center" }}
        >
          <i className="fas fa-car"></i> Seat Range: {seat}
        </Typography>
        <Divider />
        <Typography
          variant="paragraph"
          gutterBottom
          component="div"
          sx={{ mt: 2, p: 1 }}
          style={{ color: "gray", textAlign: "center" }}
        >
          <i className="fas fa-gas-pump"></i> Milage in City: {milageCity} km
        </Typography>
        <Divider />
        <Typography
          variant="paragraph"
          gutterBottom
          component="div"
          sx={{ mt: 2, p: 1 }}
          style={{ color: "gray", textAlign: "center" }}
        >
          <i className="fas fa-road"></i> Milage in Highway: {milageHighway} km
        </Typography>
        <Divider />
        <Typography
          variant="paragraph"
          gutterBottom
          component="div"
          sx={{ mt: 2, p: 1 }}
          style={{ color: "gray", textAlign: "center" }}
        >
          <i className="fas fa-dharmachakra"></i> Drive Train: {driveTrain}
        </Typography>
        <Divider />
        <Typography
          variant="paragraph"
          gutterBottom
          component="div"
          sx={{ mt: 2, p: 1 }}
          style={{ color: "gray", textAlign: "center" }}
        >
          <i className="fas fa-superpowers"></i> Horsepower: {horsepower}
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "center",
          borderBottom: "2px solid gray",
          paddingBottom: "10px",
        }}
      >
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
          Rating
          <Box sx={{ mt: 2 }}>
            <Rating
              name="read-only"
              value={rating}
              readOnly
              style={{ color: "gray" }}
            />
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default PurchasedCarInfo;
