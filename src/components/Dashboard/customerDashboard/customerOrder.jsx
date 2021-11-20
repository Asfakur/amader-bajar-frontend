import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { getCurrentUser } from "../../../services/authService";
import { getOrderByCustomerId } from "../../../services/orderServices";

const CustomerOrder = () => {
  const user = getCurrentUser();
  const [orders, setOrders] = useState({});

  const customerId = user._id;
  useEffect(() => {
    async function getData() {
      const { data: loadedOrders } = await getOrderByCustomerId(customerId);
      setOrders(loadedOrders);
    }
    getData();
  }, [customerId]);
  console.log(orders);

  const isCustomer = user && user.userType === "customer";
  if (!isCustomer) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Customer Order</h1>
    </div>
  );
};

export default CustomerOrder;
