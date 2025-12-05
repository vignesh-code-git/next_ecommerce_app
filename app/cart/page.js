"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/cartSlice";
import styles from "../module/Cart.module.css";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();

  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className={styles.wrapper}>
      {/* LEFT SIDE – CART */}
      <div className={styles.cartSection}>
        <h2 className={styles.title}>Shopping Cart</h2>

        {/* TABLE HEADER */}
        <div className={styles.tableHeader}>
          <span>Product</span>
          <span>Size</span>
          <span>Quantity</span>
          <span>Total Price</span>
          {items.length > 0 && (
            <button
              className={styles.clearCartHeaderBtn}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* EMPTY CART MESSAGE */}
        {items.length === 0 ? (
          <p style={{ textAlign: "center", padding: "20px", color: "#555" }}>
            Your cart is empty
          </p>
        ) : (
          <div className={styles.cartList}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartRow}>
                {/* PRODUCT INFO */}
                <div className={styles.productBox}>
                  <img
                    src={item.images ? item.images[0] : item.image}
                    className={styles.productImg}
                    alt={item.title}
                  />
                  <div>
                    <p className={styles.productTitle}>{item.title}</p>
                    <h2 className={styles.smallText}>{item.category}</h2>
                  </div>
                </div>

                {/* SIZE SELECTION */}
                <select className={styles.selectBox}>
                  <option>25 L</option>
                  <option>30 L</option>
                  <option>35 L</option>
                </select>

                {/* QUANTITY CONTROL */}
                <div className={styles.qtyBox}>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                {/* TOTAL PRICE PER ITEM */}
                <p className={styles.price}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* REMOVE ITEM BUTTON */}
                <button
                  className={styles.removeBtn}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {/* CART SUMMARY */}
        <div className={styles.summaryBox}>
          <div className={styles.summaryRow}>
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className={styles.summaryRowTotal}>
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE – PAYMENT SECTION */}
      <div className={styles.paymentCard}>
        <h3 className={styles.paymentTitle}>Payment Info</h3>

        <div className={styles.paymentBox}>
          <p className={styles.label}>Payment Method</p>

          <label className={styles.radioRow}>
            <input type="radio" name="pay" defaultChecked />
            <span>Credit Card</span>
          </label>

          <label className={styles.radioRow}>
            <input type="radio" name="pay" />
            <span>PayPal</span>
          </label>

          <label className={styles.label}>Name On Card</label>
          <input type="text" className={styles.input} placeholder="Your Name" />

          <label className={styles.label}>Card Number</label>
          <input
            type="text"
            className={styles.input}
            placeholder="•••• •••• •••• 2153"
          />

          <div className={styles.rowTwo}>
            <div>
              <label className={styles.label}>Expiration Date</label>
              <input type="text" className={styles.input} placeholder="05 / 2026" />
            </div>
            <div>
              <label className={styles.label}>CVV</label>
              <input type="text" className={styles.input} placeholder="156" />
            </div>
          </div>

          <button className={styles.checkoutBtn}>Check Out</button>
        </div>
      </div>
    </div>
  );
}
