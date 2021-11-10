import React from "react";
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

function App() {
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      {/* <h1>Again React js</h1> */}


      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/products/edit/:id">
            <ProductForm />
          </Route> */}

          <Route path="/products/:id">
            <ProductDetails></ProductDetails>
          </Route>

          <Route path="/products">
            <Products></Products>
          </Route>



          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>

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
