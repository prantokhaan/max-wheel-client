import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Loading = () => {
    return (
      <Box sx={{ mt: 2, ml: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={410} height={60} />
            <Skeleton variant="rectangular" width={410} height={118} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={410} height={60} />
            <Skeleton variant="rectangular" width={410} height={118} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={410} height={60} />
            <Skeleton variant="rectangular" width={410} height={118} />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mt: 2 }}>
          <Grid item xs={6} md={4}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={410} height={60} />
            <Skeleton variant="rectangular" width={410} height={118} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={410} height={60} />
            <Skeleton variant="rectangular" width={410} height={118} />
          </Grid>
          <Grid item xs={6} md={4}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={410} height={60} />
            <Skeleton variant="rectangular" width={410} height={118} />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Loading;