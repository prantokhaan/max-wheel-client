import { CircularProgress, Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
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
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email || user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
