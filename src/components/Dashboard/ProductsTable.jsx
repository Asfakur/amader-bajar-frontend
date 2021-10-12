import React from "react";
import Table from "../common/table";

const ProductsTable = ({ products, onDelete, sortColumn, onSort }) => {
  const columns = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "numberInStock", label: "Stock" },
    { path: "price", label: "Price" },
    {
      key: "action",
      label: "Action",
      content: (product) => (
        <button
          onClick={() => onDelete(product)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      data={products}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default ProductsTable;
