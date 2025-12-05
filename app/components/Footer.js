"use client";
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "30px 20px",
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Inter, sans-serif",
          margin: 0, 
       
      }}
    >
      <div style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "600" }}>
        MyStore
      </div>

      <p style={{ fontSize: "14px", color: "#cccccc", marginBottom: "10px" }}>
        Your trusted destination for quality products and smooth shopping.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "15px",
          fontSize: "14px",
        }}
      >
        <a href="/about" style={{ color: "#fff", textDecoration: "none" }}>
          About
        </a>
        <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </a>
        <a href="/products" style={{ color: "#fff", textDecoration: "none" }}>
          Products
        </a>
      </div>

      <p style={{ marginTop: "20px", fontSize: "13px", color: "#888" }}>
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
    </footer>
  );
}
