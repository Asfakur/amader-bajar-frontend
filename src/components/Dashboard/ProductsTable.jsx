import React from "react";
import TableBody from "../common/tableBody";
import TableHeader from "../common/tableHeader";

const ProductsTable = ({ products, onDelete, onSort, sortColumn }) => {
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
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={products} />
    </table>
  );
};

export default ProductsTable;
