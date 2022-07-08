/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const CartInfo = ({ productCart }) => {
	return (
		<section>
			<h4>{productCart.brand}</h4>
			<h3>{productCart.title}</h3>
			<p>{productCart.productsInCart.quantity}</p>
		</section>
	);
};

export default CartInfo;
