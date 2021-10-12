import React from "react";
import TableHeader from "../common/tableHeader";

const ProductsTable = ({ products, onDelete, onSort, sortColumn }) => {
  const columns = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "numberInStock", label: "Stock" },
    { path: "price", label: "Price" },
    { key: "action", label: "Action" },
  ];
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />

      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.category.name}</td>
            <td>{product.numberInStock}</td>
            <td>{product.price}</td>
            <td>
              <button
                onClick={() => onDelete(product)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
