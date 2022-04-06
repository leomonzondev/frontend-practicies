import React, {useState} from "react";
import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "../../../redux/Shopping/shopping-actions";
import styles from "./CartItem.module.css";





const CartItem = ({itemData, removeFromCart, adjustQty}) => {


  
  const [input, setInput] = useState(itemData.qty)


  const qtyHandle = (e) => {

    setInput(e.target.value)
    adjustQty(itemData.id, e.target.value)

    console.log(itemData.qty)
}



  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={itemData.image}
        alt={itemData.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{itemData.title}</p>
        <p className={styles.details__desc}>{itemData.description}</p>
        <p className={styles.details__price}>$ {itemData.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={input} onChange={qtyHandle} />
        </div>
        <button onClick={() => removeFromCart(itemData.id)} className={styles.actions__deleteItemBtn}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id,value))
  }
  
}
export default connect(null, mapDispatchToProps)(CartItem);