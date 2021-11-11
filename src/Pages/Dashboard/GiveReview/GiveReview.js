import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

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

const GiveReview = () => {
    const {user} = useAuth();
    const defaultInfo = {
      userEmail: user?.email,
      userName: user?.displayName,
    };
  const [reviewInfo, setReviewInfo] = React.useState(defaultInfo);

  const [isReviewed, setIsReviewed] = React.useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const finalInfo = { ...reviewInfo };
        finalInfo[field] = value;
        setReviewInfo(finalInfo);

    }
    const handleReview = e => {
        e.preventDefault();
        const review = {
          ...reviewInfo,
        }
        fetch("http://localhost:5000/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId !== "") {
              setIsReviewed(true);
              e.target.reset();
            }
          });

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
          Help us by giving a Review
        </Typography>
        <form onSubmit={handleReview} style={{ textAlign: "center" }}>
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
            About You
          </Typography>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Your Name"
            id="fullWidth"
            sx={{ mb: 3 }}
            name="userName"
            defaultValue={user?.displayName}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Your Email"
            id="fullWidth"
            name="userEmail"
            defaultValue={user?.email}
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Your Profession"
            id="fullWidth"
            name="userProfession"
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
            Share your Experience
          </Typography>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Give us a Rating between 1 to 5"
            min={1}
            max={5}
            name="rating"
            type="number"
            sx={{ mb: 3 }}
            required
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Which car you bought from us?"
            name="carBuy"
            sx={{ mb: 3 }}
          />
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="When did you buy?"
            name="buyingTime"
            sx={{ mb: 3 }}
          />
          
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Write what you want to share?"
            name="content"
            multiline
            rows={4}
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
            Add a Link of your Photo with your Car
          </Typography>
          <TextField
            style={{ width: "75%", boxShadow: "0 8px 16px #EEEBDD" }}
            onBlur={handleOnBlur}
            label="Suggested: Clear Image"
            name="userPhoto"
            sx={{ mb: 3 }}
            required
          />

          <br />
          <ButtonStyled type="submit" variant="contained">
            Review
          </ButtonStyled>
          <Box>
            {isReviewed && (
              <Alert severity="success" color="info" sx={{ ml: 3 }}>
                Reviewed Successfully
              </Alert>
            )}
          </Box>
        </form>
      </Container>
    );
};

export default GiveReview;