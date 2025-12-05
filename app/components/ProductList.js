"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Link from "next/link";
import styles from "../module/ProductList.module.css";

export default function ProductList({ products }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <Link href={`/products/${product.id}`}>
            <div className={styles.imgBox}>
              <img src={product.thumbnail || product.images?.[0]} alt={product.title} />
            </div>
          </Link>
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.price}>${product.price}</p>

          <div className={styles.smallBtnRow}>
            <button className={styles.smallBtn}>New</button>
            <button className={styles.smallBtn}>S / M</button>
            <button className={styles.smallBtn}>Size</button>
          </div>

          <button
            onClick={() => dispatch(addToCart(product))}
            className={styles.addBtn}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
