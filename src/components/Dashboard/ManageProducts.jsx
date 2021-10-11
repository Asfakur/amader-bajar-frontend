import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../services/productService";
import { getCategories } from "../../services/categoryService";
import { paginate } from "../../utils/paginate";
import ListGroup from "../common/listGroup";
import Pagination from "../common/Pagination";

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, selectCategory] = useState();
  const pageCapacity = 2;

  const filteredProducts =
    selectedCategory && selectedCategory._id
      ? products.filter((p) => p.category._id === selectedCategory._id)
      : products;

  // const paginatedProducts = paginate(products, currentPage, pageCapacity);
  const paginatedProducts = paginate(filteredProducts, currentPage, pageCapacity);

  useEffect(() => {
    async function getData() {
      const { data: loadedProducts } = await getProducts();
      setProducts(loadedProducts);

      const { data: loadedCategories } = await getCategories();
      const newCategories = [{ name: "All Categories" }, ...loadedCategories];
      setCategories(newCategories);
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

  const handleSelectCategory = (category) => {
    selectCategory(category);
    setCurrentPage(1);
  };

  if (products.length === 0) return <p>There is no product in database</p>;

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={categories}
          selectedItem={selectedCategory}
          onItemSelect={handleSelectCategory}
        />
      </div>
      <div className="col">
        <div className="col-md-8">
          <p>Total products in database {products.length}</p>
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
            itemsCount={filteredProducts.length}
            pageCapacity={pageCapacity}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageProducts;
