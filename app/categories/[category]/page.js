import CategoryCard from "../../components/CategoryCard"; // Import reusable component to display a product card

// Fetch products for a specific category from DummyJSON
async function getCategoryProducts(category) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`, // DummyJSON category endpoint
    { cache: "no-store" }                                  // Disable caching to always get fresh data
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  return data.products; // Extract products array from DummyJSON response
}

export default async function CategoryProductsPage({ params }) {
  const { category } = await params; // Extract category name from URL params
  const products = await getCategoryProducts(category); // Fetch products for this category

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{category}</h1> {/* Display category name */}

      <div
        style={{
          display: "flex", // Flexbox container for product cards
          flexWrap: "wrap", // Wrap cards to new line when necessary
          gap: "20px", // Gap between cards
          padding: "10px", // Padding around container
        }}
      >
        {products.map((product) => ( // Loop through all products in category
          <CategoryCard key={product.id} product={product} /> // Render CategoryCard for each product
        ))}
      </div>
    </div>
  );
}
