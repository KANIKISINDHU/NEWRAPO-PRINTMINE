import React from 'react';

function ProductCard({ product, handleAddToCart }) {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>    
    );
}

export default ProductCard;

