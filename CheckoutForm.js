import React, { useState } from 'react';

function CheckoutForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderSummary, setOrderSummary] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            customer: {
                name,
                email,
                address,
            },
            paymentMethod,
            orderSummary,
        };
        // Call API to place order
        console.log(order);
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
                </label>
                <br />
                <label>
                    Payment Method:
                    <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
                        <option value="">Select Payment Method</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </label>   
                <br />
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default CheckoutForm;

