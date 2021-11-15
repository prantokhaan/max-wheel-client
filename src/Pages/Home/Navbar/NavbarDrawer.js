import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
    const { user, logOut } = useAuth();


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {user.email ? (
          <Box sx={{ mx: "auto" }}>
            <List>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="inherit"
                  style={{ fontWeight: 600, color: "black" }}
                >
                  Home
                </Button>
              </Link>
            </List>
            <Divider />
            <List>
              <Link
                to="/explore"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="inherit"
                  style={{ fontWeight: 600, color: "black" }}
                >
                  Explore
                </Button>
              </Link>
            </List>
            <Divider />
            <List>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="inherit"
                  style={{ fontWeight: 600, color: "black" }}
                >
                  Dashboard
                </Button>
              </Link>
            </List>
            <Divider />

            <List>
              <Button
                style={{ color: "white", fontWeight: 600 }}
                onClick={logOut}
                variant="inherit"
              >
                LogOut
              </Button>
            </List>
            <Divider />
          </Box>
        ) : (
          <Box sx={{ mx: "auto" }}>
            <List>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="inherit"
                  style={{ fontWeight: 600, color: "black" }}
                >
                  Home
                </Button>
              </Link>
            </List>
            <Divider />
            <List>
              <Link
                to="/explore"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="inherit"
                  style={{ fontWeight: 600, color: "black" }}
                >
                  Explore
                </Button>
              </Link>
            </List>
            <Divider />

            <List>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="inherit"
                  style={{ fontWeight: 600, color: "black" }}
                >
                  Login
                </Button>
              </Link>
            </List>
            <Divider />
          </Box>
        )}
        <Divider />
        <Divider />
      </Drawer>
    </Box>
  );
}
