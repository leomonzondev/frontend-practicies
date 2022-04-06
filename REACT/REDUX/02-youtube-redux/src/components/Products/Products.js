import React from "react";
import styles from "./Products.module.css";

import Product from "./Product/Product";


import { connect } from "react-redux";


const Products = ({ products }) => {
  return (
    <div className={styles.products}>
    {
      products.map( prod =>  <Product key={prod.id} productData ={prod} />)
    }
     
    </div>
  );
};

const mapStateToProps = state => {

  return {
    products: state.shop.products
  }

}

export default connect(mapStateToProps)(Products);
