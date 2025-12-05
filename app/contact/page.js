"use client";
import React from "react";
import styles from "../module/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>

      <p className={styles.subtitle}>
        Have questions? We're here to help. Reach out to us anytime!
      </p>

      <div className={styles.contactBox}>
        <div className={styles.left}>
          <h2>Get in Touch</h2>
          <p>Email: support@mystore.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Chennai, Tamil Nadu, India</p>
        </div>

        <form className={styles.right}>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Message</label>
          <textarea placeholder="Enter your message" required />

          <button type="submit" className={styles.btn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
