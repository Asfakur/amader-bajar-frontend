import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/productService";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/Pagination";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCapacity = 2;

  const paginatedProducts = paginate(products, currentPage, pageCapacity);

  useEffect(() => {
    async function getData() {
      const { data: loadedProducts } = await getProducts();
      setProducts(loadedProducts);
      //   console.log(loadedProducts);
    }
    getData();
  }, []);

  const handleDelete = async (product) => {
    const originalProducts = products;
    const newProducts = products.filter((p) => p._id !== product._id);
    setProducts(newProducts);

    try {
      await deleteProduct(product._id);
    } catch (ex) {
      console.log("Something happen unexpected in deleting movies " + ex);
      setProducts(originalProducts); //reverse the UI
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="col-md-8">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Categories</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.numberInStock}</td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => handleDelete(product)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        itemsCount={products.length}
        pageCapacity={pageCapacity}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ManageProducts;
