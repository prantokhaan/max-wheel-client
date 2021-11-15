import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import DashboardHome from "../DashboardHome/DashboardHome";
import AddNewCar from "../AddNewCar/AddNewCar";
import GiveReview from "../GiveReview/GiveReview";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageCars from "../ManageCars/ManageCars";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const drawerWidth = 240;
const drawerHeight = 400;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{}}>
      <Toolbar
        sx={{ backgroundColor: "#393343", borderRight: "-2px solid #393343" }}
      >
        <Typography
          variant="h5"
          sx={{
            textTransform: "uppercase",
            fontFamily: `'Oswald', sans-serif`,
            ml: 3,
            fontWeight: 500,
            color: "white",
          }}
        >
          Max Wheels
        </Typography>
      </Toolbar>

      <Divider />
      {admin ? (
        <Box>
          <List>
            <Link
              to={`${url}/makeAdmin`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="inherit"
                style={{ fontWeight: 600, color: "black" }}
              >
                Make Admin
              </Button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link
              to={`${url}/addNewCar`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="inherit"
                style={{ fontWeight: 600, color: "black" }}
              >
                Add a New Car
              </Button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link
              to={`${url}/manageOrders`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="inherit"
                style={{ fontWeight: 600, color: "black" }}
              >
                Manage Orders
              </Button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link
              to={`${url}/manageCars`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="inherit"
                style={{ fontWeight: 600, color: "black" }}
              >
                Manage Cars
              </Button>
            </Link>
          </List>
        </Box>
      ) : (
        <Box>
          <Divider />
          <List>
            <Link
              to={`${url}/pay`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="inherit"
                style={{ fontWeight: 600, color: "black" }}
              >
                Payment
              </Button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link
              to={`${url}/myOrders`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="inherit"
                style={{ fontWeight: 600, color: "black" }}
              >
                My Orders
              </Button>
            </Link>
          </List>
          <Divider />
          <List>
            <Link
              to={`${url}/giveReview`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="inherit"
                style={{ fontWeight: 600, color: "black" }}
              >
                Give a Review
              </Button>
            </Link>
          </List>
        </Box>
      )}

      <Divider />
      <List>
        <Button onClick={logOut} variant="inherit" style={{ fontWeight: 600, color: "black" }}>
          Log Out
        </Button>
      </List>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      ></AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          height: { sm: drawerHeight },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerHeight,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerHeight,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: { sm: `calc(100% - ${drawerHeight}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>
          <AdminRoute path={`${path}/addNewCar`}>
            <AddNewCar />
          </AdminRoute>
          <Route path={`${path}/giveReview`}>
            <GiveReview />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders />
          </Route>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/manageCars`}>
            <ManageCars />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>

        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
