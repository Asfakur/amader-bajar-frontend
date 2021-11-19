import React from "react";
import { Route, Switch } from "react-router";
import ProductForm from "./productForm";
import LeftNav from "./adminDashboard/adminLeftNav";
import ManageProducts from "./ManageProducts";
import ManageCategory from "./manageCategory";
import CategoryForm from "./categoryForm";
import { getCurrentUser } from "../../services/authService";
import CustomerLeftNav from "./customerDashboard/customerLeftNav";
import PrivateCustomer from "../Auth/privateCustomer";
import CustomerOrder from "./customerDashboard/customerOrder";
import CustomerProfile from "./customerDashboard/customerProfile";

function Dashboard(props) {
  const user = getCurrentUser();
  const isAdmin = user && user.userType === "admin";
  const isCustomer = user && user.userType === "customer";
  console.log(isAdmin);
  return <div className="row"></div>;
}

export default Dashboard;
