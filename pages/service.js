"use client";
import React from "react";


export default function Services() {
  return (
    <div>
    

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "40px 20px",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.8",
          textAlign: "center",
        }}
      >
        {/* HERO SECTION */}
        <section style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#111" }}>
            Our Services
          </h1>
          <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
            We provide high-quality services to make your shopping smooth,
            secure, and delightful.
          </p>
        </section>

        {/* SERVICE CARDS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              width: "300px",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #eee",
              background: "#fff",
              boxShadow: "0 0 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              Fast Delivery
            </h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Get your products delivered quickly with our reliable delivery
              service across India.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              width: "300px",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #eee",
              background: "#fff",
              boxShadow: "0 0 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              Secure Payments
            </h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              All transactions are encrypted and completely safe using trusted
              payment partners.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              width: "300px",
              padding: "25px",
              borderRadius: "12px",
              border: "1px solid #eee",
              background: "#fff",
              boxShadow: "0 0 12px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#222",
              }}
            >
              24/7 Support
            </h3>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Our team is available anytime to help you with any issue or
              question.
            </p>
          </div>
        </div>

        {/* EXTRA SECTION */}
        <section style={{ marginTop: "50px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "600",
              marginBottom: "10px",
              color: "#222",
            }}
          >
            Customer Satisfaction First
          </h2>
          <p style={{ fontSize: "16px", color: "#555" }}>
            We constantly work to give you the best online shopping experience
            with quality products and top-notch services.
          </p>
        </section>
      </div>
    </div>
  );
}
