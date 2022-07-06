// import {useState} from "react";
// import "./ProductDetail.css";
// import classes from "./ProductDetail.module.css";

import {useParams} from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();
  
  console.log(params);
  
  
  return (<section>
    <h1>Product Detail</h1>
    <p>{JSON.stringify(params)}</p>
  </section>);
};

export default ProductDetail;
