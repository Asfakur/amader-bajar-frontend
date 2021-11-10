import React from "react";
import { Route, Switch } from "react-router";
import ProductForm from "./productForm";
import LeftNav from "./leftNav";
import ManageProducts from "./ManageProducts";
import ManageCategory from "./manageCategory";
import CategoryForm from "./categoryForm";

function Dashboard(props) {
  return (
    <div className="row">
      <div className="col-md-2">
        <LeftNav></LeftNav>
      </div>
      <div className="col-10">
        <Switch>
          <Route path="/dashboard/product/manage">
            <ManageProducts />
          </Route>
          <Route path="/dashboard/product/:id" component={ProductForm} />
          <Route path="/dashboard/category/manage">
            <ManageCategory />
          </Route>
          <Route path="/dashboard/category/:id" component={CategoryForm} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
