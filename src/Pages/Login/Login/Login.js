import { useTheme } from "@mui/material/styles";
import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from 'react';
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImg from '../../../images/login-car.svg';

const Login = () => {
  const [loginData, setLoginData] = React.useState({});
  const { googleSignIn, loginUser, user, isLoading, authError } = useAuth();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    googleSignIn(history, location);
  };
    return (
      <Container>
        <Grid container spacing={2} sx={{ mt: 10 }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              style={{ textAlign: "center", fontWeight: 600, color: "#393343" }}
            >
              Please Login!!
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  name="email"
                  onBlur={handleOnChange}
                  sx={{ width: 1, my: 2 }}
                />
                <br />
                <TextField
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  variant="standard"
                  name="password"
                  onBlur={handleOnChange}
                  sx={{ width: 1, my: 2 }}
                />
                <NavLink
                  to="/register"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  New User? Register Now
                </NavLink>{" "}
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: 1, mt: 2 }}
                >
                  Login
                </Button>
                <Button
                  onClick={handleGoogleSignIn}
                  variant="contained"
                  sx={{ width: 1, mt: 2 }}
                >
                  Login with Google
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user.email && (
              <Alert severity="success" sx={{ mt: 2 }}>
                User Logged In Successfully
              </Alert>
            )}
            {authError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                <AlertTitle>Error</AlertTitle>
                {authError}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {isMatch ? (
              <img
                src={loginImg}
                alt=""
                style={{
                  width: "400px",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  opacity: "5px",
                }}
              />
            ) : (
              <img
                src={loginImg}
                alt=""
                style={{
                  width: "600px",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  opacity: "5px",
                }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;