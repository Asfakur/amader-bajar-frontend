import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProductCard from "./ProductCard";
import { getProducts } from "../../services/productService";

function Products() {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await getProducts();
      setProducts(result.data);
    }
    getData();
  }, []);

  const viewProduct = (productId) => {
    history.push(`/products/${productId}`);
  };

  return (
    <div>
      <hr />
      <div className="row container-fluid">
        {products.map((product) => (
          <ProductCard
            viewProduct={viewProduct}
            product={product}
            key={product._id}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default Products;
