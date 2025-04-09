import React from "react";
// src/components/ProductDetailsModal.jsx
const ProductDetailsModal = ({ product, onClose }) => {
    if (!product) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[400px]">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{product.name}</h2>
          <p className="text-gray-700 dark:text-gray-200">Price: {product.price}</p>
          <p className="text-gray-700 dark:text-gray-200">Stock: {product.stock}</p>
  
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductDetailsModal;
  