import React from "react";
import { useState, useMemo, useCallback, lazy, Suspense } from "react";
import ProductRow from "./ProductRow"; // keep using React.memo on this one

// Lazy load the modal 🎯
const ProductDetailsModal = lazy(() => import('./ProductDetailsModal'));

const Products = () => {
  const allProducts = [
    { id: 1, name: "iPhone 15", price: "$999", stock: 120 },
    { id: 2, name: "Samsung S23", price: "$899", stock: 80 },
    { id: 3, name: "MacBook Pro", price: "$1999", stock: 45 },
    { id: 4, name: "AirPods Pro", price: "$249", stock: 200 },
  ];

  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [allProducts, search]);

  const handleViewProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const closeModal = () => setSelectedProduct(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        📦 Product List
      </h2>

      <input
        type="text"
        placeholder="Search products..."
        className="mb-6 p-2 border rounded w-full md:w-1/3 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded overflow-hidden">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-left text-gray-800 dark:text-gray-100">
              <th className="py-3 px-5">Name</th>
              <th className="py-3 px-5">Price</th>
              <th className="py-3 px-5">Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p) => (
              <ProductRow key={p.id} product={p} onView={handleViewProduct} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Suspense boundary for lazy-loaded modal */}
      <Suspense fallback={<div className="mt-4 text-center">Loading details...</div>}>
        {selectedProduct && (
          <ProductDetailsModal product={selectedProduct} onClose={closeModal} />
        )}
      </Suspense>
    </div>
  );
};

export default Products;
