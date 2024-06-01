import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreProvider';

export const HomePage = () => {
	const { products, addToLike } = useContext(StoreContext);

	return (
		<>
			<div className="container">
				<div className="row">
					{products.length ? (
						products.map((product) => (
							<div
								key={product.id}
								className="col-3"
							>
								<div className="card">
									<img
										src={product.image}
										className="card-img-top"
										alt="Producto de venta"
										style={{ height: '100px', objectFit: 'contain' }}
									/>
									<div className="card-body">
										<h5 className="card-title">{product.title}</h5>
										<p
											className="card-text"
											style={{ height: '150px', overflow: 'hidden' }}
										>
											{product.description}
										</p>

										<hr />

										<p className="card-text">
											Precio: <strong>{product.price}</strong>
										</p>

										<button
											className="btn btn-success"
											onClick={() => addToLike(product.id)}
										>
											{product.onLike ? 'Remove from favorites' : 'Add to favorites'}
										</button>
									</div>
								</div>
							</div>
						))
					) : (
						<h1>Loading...</h1>
					)}
				</div>
			</div>
		</>
	);
};
