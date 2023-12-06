import React from "react";
import { Spinner } from "react-bootstrap";
import CountDown from "./countDown";

function Reload() {
  const handleHardRefresh = () => {
    window.location.reload(true);
  };

  return (
    <div className="row col-10 d-flex justify-content-center mt-3">
      <br />
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <h3 className="text-center">
        Kindly be patient as the data is fetched from the backend.
      </h3>
      <p className="text-center">
        When the backend is idle, the server{" "}
        <span className="font-weight-bold text-danger">
          may take approximately 30 seconds to function
        </span>
        . To initiate the data loading process, kindly refresh. ...
        <button className="btn btn-warning" onClick={handleHardRefresh}>
          Refresh
        </button>
      </p>
      <CountDown />
    </div>
  );
}

export default Reload;
