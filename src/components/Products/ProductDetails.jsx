import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { payBill } from "../../services/paymentService";
import { getProduct } from "../../services/productService";
import { stripeKey } from "../../config.json";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState({});
  const [customerDetails, setCustomerDetails] = useState({
    _id: "614618740d94b1b9e6edafda",
    name: "Kuddus",
    phone: "+8801214541221",
  });

  let productQuantity = Number(quantity) < 1 ? 1 : Number(quantity);
  // console.log(productQuantity);

  // console.log(productDetails);

  useEffect(() => {
    async function getData() {
      const result = await getProduct(id);
      setProduct(result.data);
    }
    getData();
  }, []);

  useEffect(() => {
    setProductDetails({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: productQuantity,
    });
  }, [product, productQuantity]);

  const handleQuantity = (isIncrease) => {
    if (isIncrease) {
      if (Number(quantity) > 24) return;
      setQuantity(Number(quantity) + 1);
      // console.log(quantity);
    } else {
      if (Number(quantity) > 1) {
        setQuantity(Number(quantity) - 1);
      } else {
        setQuantity(1);
      }

      // console.log(quantity);
    }
  };
  const handleGetQuantity = (e) => {
    const currentValue = Number(e.currentTarget.value);
    if (currentValue > 25) return;
    if (currentValue > 0) {
      setQuantity(currentValue);
    } else {
      setQuantity("");
    }
  };

  const handlePay = async (token) => {
    console.log("token", token);
    console.log("product details in frontend", productDetails);

    try {
      const response = await payBill({ token, productDetails, customerDetails });
      console.log("Payment Response ", response);
      console.log("payment done");
    } catch (ex) {
      console.log(ex);
    }
  };
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
            <h4>
              Price {product.price} <span className="taka">&#2547;</span>
            </h4>
            <p>Details : {product.details}</p>
          </div>
          <div className="flex col-md-4 d-flex">
            <span
              className="btn btn-success fs-5 mx-1"
              onClick={() => handleQuantity(false)}
            >
              -
            </span>
            <span>
              <input
                type="number"
                size="2"
                min="1"
                max="20"
                name="quantity"
                // defaultValue={orderDetails.quantity}
                value={quantity}
                onChange={handleGetQuantity}
                className="form-control mt-1"
              />
            </span>
            <span
              className="btn btn-success fs-5 mx-1"
              onClick={() => handleQuantity(true)}
            >
              +
            </span>
            <StripeCheckout
              stripeKey={stripeKey}
              token={handlePay}
              amount={Math.round(
                (productDetails.price * productDetails.quantity * 100) / 85.79
              )}
              name={productDetails.name}
              image="https://i.ibb.co/8ztWc1p/logo-amader-bajar.png"
              billingAddress
              // shippingAddress
            ></StripeCheckout>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;
