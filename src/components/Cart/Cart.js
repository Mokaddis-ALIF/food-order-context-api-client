import React, { useContext } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = () => {
	const cartCtx = useContext(CartContext);
	const cartItems = cartCtx.items;
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const cartItemNumbers = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const clearItemHandler = (id) => {
		cartCtx.clearItem(id);
	};

	const removeAllItemFromCart = () => {
		cartCtx.clearCart();
	};

	return (
		<Container className="mt-5">
			<h3 className="text-center text-danger border-bottom w-25 mx-auto">
				My Cart
			</h3>
			{cartItems.length === 0 ? (
				<h1 className="text-center text-danger mt-3">
					<i>You haven't selected anything</i>
				</h1>
			) : (
				<Row>
					<Col
						lg={8}
						sm={6}
						className="d-flex flex-column justify-content-between align-items-start"
					>
						{cartItems.map((cart) => (
							<CartItem
								key={cart.id}
								title={cart.title}
								amount={cart.amount}
								price={cart.price}
								id={cart.id}
								img={cart.img}
								quantity={cart.amount}
								onRemove={cartItemRemoveHandler.bind(null, cart.id)}
								onAdd={cartItemAddHandler.bind(null, cart)}
								onClear={clearItemHandler.bind(null, cart.id)}
							/>
						))}
					</Col>
					<Col
						lg={4}
						sm={6}
						className="d-flex justify-content-end align-items-start mt-5"
					>
						<Card
							className="d-flex justify-content-center align-items-center bg-secondary text-light"
							style={{ width: '19rem' }}
						>
							<Card.Body>
								<Card.Text>
									<p className="lead">
										From <b>Gulshan plaza</b>
									</p>
									<p className="lead">Arriving in 20-30 minutes</p>
									<p className="lead">107 Rd NO 8</p>
								</Card.Text>
								<Card.Title className="d-flex flex-column py-3">
									<div className="d-flex gap-5">
										<div className="d-flex">
											<b>Subtotal</b>
											<div className="text-danger">
												{cartItemNumbers === 0
													? ''
													: cartItemNumbers === 1
													? `.${cartItemNumbers} item`
													: `.${cartItemNumbers} items`}
											</div>
										</div>

										{totalAmount}
									</div>
								</Card.Title>

								<Link to="/order">
									<Button variant="danger">Ready to Order</Button>
								</Link>
								<Button
									className="ms-3"
									variant="danger"
									onClick={removeAllItemFromCart}
								>
									Clear Cart
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Cart;
