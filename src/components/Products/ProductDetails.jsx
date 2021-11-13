import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../services/productService";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const result = await getProduct(id);
      setProduct(result.data);
    }
    getData();
  }, []);

  // console.log(product);

  return (
    <div>
      <h1>This is product details</h1>
      {product.name && (
        <div className="row container-fluid">
          <div className="col-md-6">
            <img src={product.image} alt="" />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <h4>Category : {product.category.name}</h4>
            <h4>Price: {product.price}</h4>
            <p>Details : {product.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
