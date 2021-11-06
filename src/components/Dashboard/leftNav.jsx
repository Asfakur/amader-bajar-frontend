import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="bg-secondary left-nav">
      <Link to="/admin/manage" className="btn btn-secondary m-1">
        Manage Products
      </Link>
      <Link to="/admin/new" className="btn btn-secondary  m-1">
        Add new Product
      </Link>
    </div>
  );
};

export default LeftNav;
