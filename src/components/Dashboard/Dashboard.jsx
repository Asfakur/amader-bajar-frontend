import React from "react";
import { Route, Switch } from "react-router";
import ProductForm from "./productForm";
import LeftNav from "./leftNav";
import ManageProducts from "./ManageProducts";

function Dashboard(props) {
  return (
    <div className="row">
      <div className="col-md-2">
        <LeftNav></LeftNav>
      </div>
      <div className="col-10">
        <Switch>
          <Route path="/admin/manage">
            <ManageProducts />
          </Route>
          <Route path="/admin/new">
            <ProductForm />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
