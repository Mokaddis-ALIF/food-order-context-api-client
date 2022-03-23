import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './MenuDetails.css';

import CartContext from '../../store/cart-context';

const MenuDetails = () => {
	const { id } = useParams();

	const cartCtx = useContext(CartContext);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://sheltered-forest-65434.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [setProducts]);

	const newItem = products.find((item) => item._id == id);
	console.log(newItem);

	const addToCartHandler = () => {
		cartCtx.addItem({
			id: newItem?._id,
			title: newItem?.title,
			amount: 1,
			price: newItem?.price,
			img: newItem?.img,
		});
	};

	return (
		<div id="details">
			<Container>
				<Row>
					<Col
						lg={6}
						sm={12}
						className="d-flex flex-column justify-content-center align-items-start gap-2"
					>
						<h2>{newItem?.title}</h2>
						<p className="lead">{newItem?.desc}</p>

						<h3>${newItem?.price}</h3>

						<Button variant="danger" onClick={addToCartHandler}>
							Add To Cart
						</Button>
					</Col>
					<Col
						lg={6}
						sm={12}
						className="d-flex flex-column justify-content-center align-items-center"
					>
						<Image src={newItem?.img} fluid className="w-75 mt-5" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default MenuDetails;
