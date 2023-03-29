import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="text-center">
      <h4 className="text-primary">Loading ...</h4>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
