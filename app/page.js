import ProductList from "./components/ProductList";
import Carousel from "./components/Carousal";

export const metadata = {
  title: "My Shop",
  description: "Explore our featured products in My Shop",
  icons: "/favicon.ico",
};

export default async function Home() {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    const products = data.products;

    return (
      <div style={{ padding: "2rem" }}>
        <Carousel />

        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          Featured Products
        </h2>

        <ProductList products={products} />
      </div>
    );
  } catch (error) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "red",
          fontSize: "1.2rem",
        }}
      >
        <h2>⚠️ Failed to load products</h2>
        <p>Please try again later.</p>
      </div>
    );
  }
}
