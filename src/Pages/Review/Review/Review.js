import { Grid, Paper, Typography, Box, Rating } from '@mui/material';
import React from 'react';

const Review = ({review}) => {
    const {userName, uid, userEmail, userPhoto, userProfession, content, rating} = review;
    return (
      <>
        <Grid item xs={12} md={4} sx={{ pb: 3 }}>
          <Paper
            sx={{
              mt: 1,
              boxShadow: "0 8px 16px rgba(0,0,0,.1)",
              borderRadius: "10px",
            }}
          >
            <Box
              style={{
                padding: "20px",
                textAlign: "center",
                borderBottom: "2px solid gray",
              }}
            >
              <img
                src={userPhoto}
                alt={userName}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box sx={{ p: 3 }} style={{ borderBottom: "2px solid gray" }}>
              <Typography
                variant="paragraph"
                style={{ color: "gray", fontSize: "14px" }}
              >
                {content}
              </Typography>
            </Box>
            <Box
              sx={{ p: 1 }}
              style={{ textAlign: "center" }}
            >
              <Rating value={rating} readOnly style={{color: '#4361ee'}}></Rating>
            </Box>
            <Box
              sx={{ p: 1 }}
              style={{
                textAlign: "center",
                backgroundColor: "#4361ee",
                color: "white",
              }}
            >
              <Typography variant="paragraph">
                {userName}{" "}
                <Typography variant="paragraph">({userProfession})</Typography>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </>
    );
};

export default Review;