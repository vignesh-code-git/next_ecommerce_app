"use client";
import Link from "next/link";

export const metadata = {
  title: 'ShopMe',                                      // Tab name
  description: 'Explore our featured products in My Shop', // Meta description
  icons: '/google.png',                                 // Favicon (place in /public folder)
}

export default function CategoryCard({ product }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          width: "300px",
          height: "400px",
          border: "1px solid #ccc",
          borderRadius: "12px",
          textAlign: "center",
          padding: "20px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          fontFamily: "arial",
          marginLeft: "100px"
        }}
      >
        <div>
          <img
            src={product.images[0]}         // Use first image from DummyJSON's images array
            alt={product.title}
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
        </div>

        <div>
          <h2 style={{ fontSize: "18px", fontWeight: "600", margin: "10px 0" }}>
            {product.title}
          </h2>
          <p style={{ fontSize: "16px", color: "#111", marginBottom: "10px" }}>
            ${product.price}
          </p>
          <Link
            href={`/products/${product.id}`}
            style={{
              textDecoration: "none",
              color: "#fff",
              background: "#111",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "500",
              display: "inline-block",
            }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
