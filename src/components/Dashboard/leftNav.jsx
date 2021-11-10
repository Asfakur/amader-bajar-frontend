import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="bg-secondary left-nav">
      <Link to="/dashboard/product/manage" className="btn btn-secondary m-1">
        Manage Products
      </Link>
      <Link to="/dashboard/product/new" className="btn btn-secondary  m-1">
        Add new Product
      </Link>
      <Link to="/dashboard/category/manage" className="btn btn-secondary  m-1">
        Manage Categories
      </Link>
    </div>
  );
};

export default LeftNav;
