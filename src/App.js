import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import ProductDetails from "./components/Products/ProductDetails";
import Products from './components/Products/Products';
import NavBar from './components/shared/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import ProductForm from "./components/Dashboard/productForm";
import NotFound from "./components/shared/notFound";
import RegisterForm from "./components/Auth/registerForm";
import LoginForm from "./components/Auth/loginForm";

import Logout from "./components/Auth/logout";
import auth from "./services/authService";
import PrivateRoute from "./components/Auth/privateRoute";

function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const newUser = auth.getCurrentUser()
    setUser(newUser);
  }, [])

  return (
    <div className="App">
      {/* <ToastContainer /> */}
      {/* <h1>Again React js</h1> */}


      <Router>
        <NavBar user={user}></NavBar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/products/edit/:id">
            <ProductForm />
          </Route> */}

          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" >
            <Logout />
          </Route>

          <Route path="/products/:id">
            <ProductDetails></ProductDetails>
          </Route>

          <Route path="/products">
            <Products></Products>
          </Route>



          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
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
