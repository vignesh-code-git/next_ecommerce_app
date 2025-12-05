"use client";
import Link from "next/link";
import styles from "../module/CategoryCard.module.css";

export const metadata = {
  title: 'ShopMe',
  description: 'Explore our featured products in My Shop',
  icons: '/google.png',
}

export default function CategoryCard({ product }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.imageBox}>
          <img
            src={product.images[0]}
            alt={product.title}
            className={styles.productImg}
          />
        </div>

        <div className={styles.details}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <Link href={`/products/${product.id}`} className={styles.viewBtn}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
