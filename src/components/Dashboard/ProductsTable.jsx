import React from "react";

const ProductsTable = ({ products, onDelete, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("name")}>Name</th>
          <th onClick={() => onSort("category.name")}>Categories</th>
          <th onClick={() => onSort("numberInStock")}>Stock</th>
          <th onClick={() => onSort("price")}>Price</th>
          <th>Action</th>
        </tr>
      </thead>
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
