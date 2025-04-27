import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, handleAddToCart }) {
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} handleAddToCart={handleAddToCart} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;

