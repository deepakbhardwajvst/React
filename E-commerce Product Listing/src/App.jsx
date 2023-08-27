import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import FilterBar from "./components/FilterBar";
import SortDropdown from "./components/SortDropdown";
import ProductDetail from "./components/ProductDetail";

const productsData = [
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    price: 5999.99,
    image: "https://Deepak.com/smartphone.jpg",
    description: "A high-end smartphone with advanced features.",
  },
  {
    id: 2,
    name: "Laptop",
    category: "Electronics",
    price: 129999.99,
    image: "https://Deepak.com/laptop.jpg",
    description: "A powerful laptop for work and entertainment.",
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "Clothing",
    price: 599.99,
    image: "https://Deepak.com/tshirt.jpg",
    description: "A comfortable and stylish t-shirt.",
  },
  {
    id: 4,
    name: "Jeans",
    category: "Clothing",
    price: 999.99,
    image: "https://Deepak.com/jeans.jpg",
    description: "Classic denim jeans for everyday wear.",
  },
  {
    id: 5,
    name: "Watch",
    category: "Accessories",
    price: 1999.99,
    image: "https://Deepak.com/watch.jpg",
    description: "An elegant watch that complements any outfit.",
  },
];

const categoriesData = ["Electronics", "Clothing", "Accessories"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("priceAsc");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  const filteredProducts = productsData.filter((product) =>
    selectedCategory ? product.category === selectedCategory : true
  );

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (selectedSort === "priceAsc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-commerce Product Listing</h1>
      </header>
      <main>
        <FilterBar
          categories={categoriesData}
          handleCategoryChange={handleCategoryChange}
        />
        <SortDropdown handleSortChange={handleSortChange} />
        <ProductList products={sortedProducts} />
        <ProductDetail selectedProduct={selectedProduct} />
      </main>
    </div>
  );
}

export default App;
