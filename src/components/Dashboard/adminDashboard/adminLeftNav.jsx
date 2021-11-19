import React from "react";
import { Link } from "react-router-dom";

const AdminLeftNav = () => {
  return (
    <div className="bg-secondary left-nav d-flex flex-column">
      <Link to="/admin/product/manage" className="btn btn-secondary m-1">
        Manage Products
      </Link>
      <Link to="/admin/product/new" className="btn btn-secondary  m-1">
        Add new Product
      </Link>
      <Link to="/admin/category/manage" className="btn btn-secondary  m-1">
        Manage Categories
      </Link>
    </div>
  );
};

export default AdminLeftNav;
