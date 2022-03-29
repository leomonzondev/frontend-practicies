import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./Product.module.css"

export const Product = () => {
  return (
    <div>
      <img
        className={styles.product__image}
        src="https://images.unsplash.com/photo-1591991564021-0662a8573199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>This is some cube</p>
        <p className={styles.details__desc}>This is he decription of the cube</p>
        <p className={styles.details__price}>$ 15.00</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>        
    </div>
  )
}
