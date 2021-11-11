import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login'
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Cars from './Pages/Explore/Cars/Cars';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Register from './Pages/Login/Register/Register';
import Header from './Pages/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import CarPurchase from './Pages/CarPurchase/CarPurchase';
import Reviews from './Pages/Review/Reviews/Reviews';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/explore">
              <Cars />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:carId">
              <CarPurchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/review">
              <Reviews />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
