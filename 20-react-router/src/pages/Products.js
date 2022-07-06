// import {useState} from "react";
// import "./Products.css";
// import classes from "./Products.module.css";

import {Link} from "react-router-dom";

const Products = (props) => {
  return (<section>
      <h1>The products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Product 1 - book</Link></li>
        <li>
          <Link to="/products/p2">Product 2 - carpet</Link></li>
        <li>
          <Link to="/products/p3">Product 3 - online course</Link></li>
      </ul>
    </section>
  );
};

export default Products;
