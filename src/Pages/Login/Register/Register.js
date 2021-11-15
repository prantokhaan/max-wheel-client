import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";
import registerImg from '../../../images/register.svg';
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not match");
      e.preventDefault();
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      loginData.name,
      loginData.phoneNumber,
      history
    );
    e.preventDefault();
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 5 }} item xs={12} md={6}>
            <Typography
              variant="h5"
              style={{ textAlign: "center", fontWeight: 600, color: "#393343" }}
            >
              Register, It's Free!!
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                  name="name"
                  onBlur={handleOnChange}
                  sx={{ width: 1, my: 2 }}
                />
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  name="email"
                  onBlur={handleOnChange}
                  sx={{ width: 1, my: 2 }}
                />
                <TextField
                  id="standard-basic"
                  label="Your Phone Number"
                  variant="standard"
                  type="number"
                  name="phoneNumber"
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
                <TextField
                  id="standard-basic"
                  label="Retype Your Password"
                  type="password"
                  variant="standard"
                  name="password2"
                  onBlur={handleOnChange}
                  sx={{ width: 1, my: 2 }}
                />
                <NavLink
                  to="/Login"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Already Registered? Login Now
                </NavLink>{" "}
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: 1, mt: 2 }}
                >
                  Register
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress sx={{ mt: 5 }} />}
            {user.email && (
              <Alert severity="success">User Created Successfully</Alert>
            )}
            {authError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                <AlertTitle>Error</AlertTitle>
                {authError}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={registerImg} alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
