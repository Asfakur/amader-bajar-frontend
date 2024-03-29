import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import ProductDetails from "./components/Products/ProductDetails";
import NavBar from './components/shared/NavBar/NavBar';
import NotFound from "./components/shared/notFound";
import RegisterForm from "./components/Auth/registerForm";
import LoginForm from "./components/Auth/loginForm";

import Logout from "./components/Auth/logout";
import auth from "./services/authService";
import PrivateRoute from "./components/Auth/privateRoute";
import AdminDashboard from "./components/Dashboard/adminDashboard/AdminDashboard";
import CustomerDashboard from "./components/Dashboard/customerDashboard/CustomerDashboard";

function App() {

  const [user, setUser] = useState({});
  useEffect(() => {
    const newUser = auth.getCurrentUser()
    setUser(newUser);
  }, [])

  return (
    <div className="App">
      <Router>
        <NavBar user={user}></NavBar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" >
            <Logout />
          </Route>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute path="/customer">
            <CustomerDashboard />
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
