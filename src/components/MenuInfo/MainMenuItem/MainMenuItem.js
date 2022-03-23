import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainMenuItem.css';
import CartContext from '../../../store/cart-context';

const MainMenuItem = ({ menuItem }) => {
	const { _id, img, title, price } = menuItem;

	const cartCtx = useContext(CartContext);

	const addToCartHandler = () => {
		cartCtx.addItem({
			id: _id,
			title: title,
			amount: 1,
			price: price,
			img: img,
		});
	};

	return (
		<div className="col-md-4 py-3 my-2" id="card">
			<div className="d-flex flex-column justify-content-center align-items-center">
				<Image src={img} className="w-50" fluid />

				<h5 className="mt-3">{title}</h5>

				<h6>
					<b>${price}</b>
				</h6>
				<div className="d-flex justify-content-between align-items-center">
					<Link
						to={`/details/${_id}`}
						style={{
							textDecoration: 'none',
						}}
					>
						<Button variant="outline-success" className="me-3 p-2">
							Details
						</Button>
					</Link>
					<Button
						variant="outline-danger"
						className="me-3 p-2"
						onClick={addToCartHandler}
					>
						Add to Cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MainMenuItem;
