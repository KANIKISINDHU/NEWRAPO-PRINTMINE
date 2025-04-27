import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    
    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleAddToCart = (product) => {
        setCart((prevCart) => ({ ...prevCart, [product.id]: product }));
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <ProductList products={products} handleAddToCart={handleAddToCart} />
                </Route>
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/shopping-cart">
                    <ShoppingCart cart={cart} />
                </Route>
                <Route path="/checkout">
                    <CheckoutForm />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

