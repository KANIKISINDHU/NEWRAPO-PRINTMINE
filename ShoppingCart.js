import React from 'react';

function ShoppingCart({ cart }) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {Object.keys(cart).map((productId) => (
                    <li key={productId}>
                        <span>{cart[productId].name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
