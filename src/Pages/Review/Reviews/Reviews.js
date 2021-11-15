import React from 'react';
import {Box, Typography, Container, Grid} from '@mui/material'
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        fetch("https://calm-plateau-72250.herokuapp.com/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    }, [])

    return (
      <Box style={{backgroundColor: '#eeeeee'}}>
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
          User's Review
        </Typography>
        <Container style={{ marginTop: '20px' }}>
          <Grid container spacing={4}>
            {reviews.map((review) => (
              <Review key={review.uid} review={review}></Review>
            ))}
          </Grid>
        </Container>
      </Box>
    );
};

export default Reviews;