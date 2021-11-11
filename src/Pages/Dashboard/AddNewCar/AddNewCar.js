import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { Box, styled } from '@mui/system';
import React from 'react';

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

const AddNewCar = () => {

  const [carInfo, setCarInfo] = React.useState({});
  const [isPosted, setIsPosted] = React.useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const finalInfo = { ...carInfo };
        finalInfo[field] = value;
        setCarInfo(finalInfo);
    }
    const handlePostCar = e => {
        e.preventDefault();
        const post = {
          ...carInfo
        }
        fetch("http://localhost:5000/cars", {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId !== ''){
            setIsPosted(true);
            e.target.reset()
          }
        })
    }
    
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
          Add a New car
        </Typography>
        <form onSubmit={handlePostCar} style={{ textAlign: "center" }}>
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
            Basic Information
          </Typography>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Car Name"
            id="fullWidth"
            sx={{ mb: 3 }}
            name="name"
            required
          />
          <TextField
            fullWidth
            onBlur={handleOnBlur}
            label="Description"
            id="outlined-multiline-static"
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            multiline
            rows={4}
            name="description"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Price"
            type="number"
            id="fullWidth"
            name="price"
            sx={{ mb: 3 }}
            required
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
            Specifications
          </Typography>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Number of Seats"
            name="seat"
            type="number"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="What about the Milage in City?"
            name="milageCity"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="What about the Milage in Highway?"
            name="milageHighway"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="What type of Drivetrain?"
            name="driveTrain"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Horsepower?"
            name="horsepower"
            sx={{ mb: 3 }}
            required
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
            Some Extra Information
          </Typography>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Why people should buy it?"
            name="whyBuy"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="It's global Rating?"
            name="rating"
            type="number"
            max={5}
            min={1}
            sx={{ mb: 3 }}
            required
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
            Add a Link of Photo of this Car
          </Typography>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Suggested: Front Photo"
            name="img"
            sx={{ mb: 3 }}
            required
          />

          <br />
          <ButtonStyled type="submit" variant="contained">
            Post
          </ButtonStyled>
          <Box>
            {isPosted && (
              <Alert severity="success" color="info" sx={{ml: 3}}>
                Posted Successfully
              </Alert>
            )}
          </Box>
        </form>
      </Container>
    );
};

export default AddNewCar;