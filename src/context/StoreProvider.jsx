import React, { createContext, useEffect, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
	const productsOnLike = JSON.parse(localStorage.getItem('like'));

	const [products, setProducts] = useState([]);
	const [like, setLike] = useState(productsOnLike ? productsOnLike : []);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const productsJson = await fetch('https://fakestoreapi.com/products');
		const products = await productsJson.json();

		const productsFiltered = products.map(
			({ id, title, price, image, description }) => ({
				id,
				title,
				price,
				image,
				description,
				onLike: false,
			})
		);

		setProducts(productsFiltered);
	};

	const addToLike = (id) => {
		const productsModified = products.map((product) =>
			product.id == id ? { ...product, onLike: !product.onLike } : product
		);

		setProducts(productsModified);

		const productsOnLike = productsModified.filter(
			(product) => product.onLike == true
		);

		localStorage.setItem('like', JSON.stringify(productsOnLike));

		setLike(productsOnLike);
	};

	return (
		<>
			<StoreContext.Provider value={{ products, like, addToLike }}>
				{children}
			</StoreContext.Provider>
		</>
	);
};
