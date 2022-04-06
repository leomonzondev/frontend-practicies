import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({cart}) => {

  const [cartCount, setCartCount] = useState(0)


  useEffect(() => {
    let count = 0
    cart.forEach(item => {
      count += item.qty
    })
    setCartCount(count)

  },[cart,cartCount])

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://www.pngplay.com/wp-content/uploads/7/Cart-Icon-Background-PNG-Image.png"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};



const mapStateToProps = (state) => {
  
  return {
    cart: state.shop.cart
  }
  
}


export default connect(mapStateToProps)(Navbar);