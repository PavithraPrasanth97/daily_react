// src/components/ProductList.js
import React from 'react';

const Productlist = ({ products, addToCart }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // 4 products in each row
      gap: '1rem',
      padding: '1rem'
    }}>
      {products.map(product => (
        <div key={product.id} style={{
          border: '1px solid #ccc', 
          padding: '1rem', 
          boxSizing: 'border-box'
        }}>
          <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
