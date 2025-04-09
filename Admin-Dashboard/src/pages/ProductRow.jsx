
import React from "react";

const ProductRow = React.memo(({ product, onView }) => {
  return (
    <tr
      className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
      onClick={() => onView(product)}
    >
      <td className="py-3 px-5">{product.name}</td>
      <td className="py-3 px-5">{product.price}</td>
      <td className="py-3 px-5">{product.stock}</td>
    </tr>
  );
});

export default ProductRow;
