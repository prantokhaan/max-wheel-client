import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarDrawer from "../Navbar/NavbarDrawer";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


function Navbar(props) {
  const { children, window } = props;
  const {user} = useAuth()

  

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const {user, logOut} = useAuth();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#393343" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            CARS
          </Typography>
          {isMatch ? (
            <Box style={{ mt: 0 }}>
              <NavbarDrawer />
            </Box>
          ) : (
            <Box>
              {user.email ? (
                <Box>
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Home
                    </Button>
                  </Link>
                  <Link
                    to="/explore"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Explore
                    </Button>
                  </Link>
                  <Link
                    to="/review"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Reviews
                    </Button>
                  </Link>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Dashboard
                    </Button>
                  </Link>
                    <Button
                    style={{color: 'white'}}
                      onClick={logOut}
                      variant="inherit"
                      style={{ fontWeight: 600 }}
                    >
                      LogOut
                    </Button>
                </Box>
              ) : (
                <Box>
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Home
                    </Button>
                  </Link>
                  <Link
                    to="/explore"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Explore
                    </Button>
                  </Link>
                  <Link
                    to="/review"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Reviews
                    </Button>
                  </Link>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button variant="inherit" style={{ fontWeight: 600 }}>
                      Login
                    </Button>
                  </Link>
                </Box>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <Navbar {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Navbar>
    </React.Fragment>
  );
}
