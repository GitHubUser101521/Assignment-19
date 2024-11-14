import React from 'react';

function Q5({ products }) {
  const productListItems = [];

  products.forEach((product, index) => {
    productListItems.push(
      <li key={index}>
        {product.name} - {product.inStock ? 'In Stock' : 'Out of Stock'}
      </li>
    );
  });

  return (
    <ul>
      {productListItems}
    </ul>
  );
}

export default Q5;