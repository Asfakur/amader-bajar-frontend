import React from "react";
import ManageProducts from "./ManageProducts";

function Dashboard(props) {
  return (
    <div className="row">
      <div className="col-md-3">Left Nav</div>
      <ManageProducts />
    </div>
  );
}

export default Dashboard;
