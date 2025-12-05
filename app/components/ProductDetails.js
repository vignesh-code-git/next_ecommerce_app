"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import styles from "../module/ProductDetails.module.css";

export default function ProductDetails({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {/* LEFT product image */}
      <div className={styles.left}>
        <div className={styles.mainImageWrapper}>
          <img
            src={product.images[0]}       // DummyJSON uses an array for images
            alt={product.title}
            className={styles.mainImage}
          />
        </div>
      </div>

      {/* RIGHT product info */}
      <div className={styles.right}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.brand}>{product.category}</p>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.desc}>{product.description}</p>

        <button
          className={styles.cartBtn}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
