import React, { useContext } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import './Order.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const Order = () => {
	const cartCtx = useContext(CartContext);
	const cartItems = cartCtx.items;
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const { user } = useAuth();

	const cartItemNumbers = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);
	const history = useHistory();

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();

	const orderData = [];

	for (const data of cartCtx.items) {
		orderData.push({ title: data.title, amount: data.amount });
	}

	const onSubmit = (data) => {
		data.order = orderData;
		data.totalAmount = totalAmount;

		fetch(`https://sheltered-forest-65434.herokuapp.com/orders`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert('Order placed successfully');
					history.push('/my-orders');
				}
			});
	};

	return (
		<Container fluid className="order">
			<Row>
				<Col md={7} sm={12}>
					{cartItems.map((item) => (
						<div
							className="d-flex justify-content-between align-items-center py-1 border-bottom"
							key={item.id}
						>
							<Image src={item.img} thumbnail className="w-25 border-0" />
							<h5 className="text-danger">
								<i>{item.title}</i>
							</h5>
							<div>
								<b className="d-flex justify-content-between align-items-center gap-1 h5">
									${item.price}
									<div className="text-danger">X</div>
									{item.amount}
								</b>
							</div>
						</div>
					))}

					<div className="text-end text-danger h3 mt-3">
						<i>
							<b>
								{cartItemNumbers}items: {totalAmount}
							</b>
						</i>
					</div>
				</Col>
				<Col
					md={5}
					sm={12}
					className="text-center d-flex flex-column justify-content-center align-items-center"
				>
					<h2>Place your order</h2>
					<form
						className="shipping-form d-flex flex-column justify-content-center align-items-center gap-4 mt-5 py-3"
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							className="w-75 border-top-0 rounded"
							defaultValue={user.email}
							placeholder="email"
							{...register('email', { required: true })}
						/>

						{errors.email && (
							<span className="error">This field is required</span>
						)}
						<input
							className="w-75 border-top-0 rounded"
							placeholder="Address"
							defaultValue=""
							{...register('address')}
						/>
						<input
							className="w-75 border-top-0 rounded"
							placeholder="City"
							defaultValue=""
							{...register('city')}
						/>
						<input
							className="w-75 border-top-0 rounded"
							placeholder="Phone"
							defaultValue=""
							{...register('phone')}
						/>

						<Button className="w-75" type="submit" variant="danger">
							Submit
						</Button>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default Order;
