"use client";
import React from "react";
import Header from "@/app/components/Header";

export default function About() {
  return (
    
    <div style={styles.container}>
      
      <section style={styles.hero}>
        <h1 style={styles.title}>About Our Store</h1>
        <p style={styles.subtitle}>
          Your one-stop destination for high-quality products at the best price.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Who We Are</h2>
        <p style={styles.text}>
          We are an innovative e-commerce platform built to give customers a
          seamless shopping experience. Our goal is to provide premium products,
          fast delivery, and excellent customer service.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Our Mission</h2>
        <p style={styles.text}>
          To make online shopping easy, affordable, and enjoyable for everyone.
          We focus on quality, transparency, and trust.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Why Choose Us?</h2>
        <ul style={styles.list}>
          <li>✔ High-quality products</li>
          <li>✔ Fast & reliable delivery</li>
          <li>✔ Secure payments</li>
          <li>✔ 24/7 customer support</li>
          <li>✔ Hassle-free returns</li>
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "40px 20px",
    fontFamily: "Inter, sans-serif",
    lineHeight: "1.8",
  },

  hero: {
    textAlign: "center",
    marginBottom: "40px",
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#111",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginTop: "10px",
  },

  section: {
    marginBottom: "40px",
  },

  heading: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#222",
  },

  text: {
    fontSize: "16px",
    color: "#555",
  },

  list: {
    marginTop: "10px",
    lineHeight: "1.9",
    color: "#333",
    fontSize: "16px",
  },
};
