import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import CartContext from '../../store/cart-context';

const MyOrder = () => {
	const cartCtx = useContext(CartContext);
	const [myOrders, setMyOrders] = useState([]);

	const { user } = useAuth();

	const handleDelete = (id) => {
		const proceed = window.confirm('Are you sure you want to delete?');

		if (proceed) {
			const url = `https://sheltered-forest-65434.herokuapp.com/orders/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount) {
						alert('Your order has been successfully Deleted');
						const remainingOrders = myOrders.filter(
							(order) => order._id !== id
						);
						setMyOrders(remainingOrders);
					}
				});
		}
	};

	useEffect(() => {
		cartCtx.clearCart();

		fetch(`https://sheltered-forest-65434.herokuapp.com/orders`)
			.then((res) => res.json())
			.then((data) => setMyOrders(data));
	}, [cartCtx]);

	const userOrders = myOrders.filter((order) => order.email === user.email);

	return (
		<Container style={{ height: '80vh' }} className="text-center mt-5">
			<h3 className="text-center text-danger border-bottom w-25 mx-auto">
				My orders
			</h3>
			<Row className="d-flex flex-column mt-3">
				<Col lg={12} sm={12}>
					<Table responsive>
						<thead>
							<tr>
								<th>Email</th>
								<th>Number</th>
								<th>Address</th>
								<th>Products</th>
								<th>Total Amount</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{userOrders.map((order) => (
								<tr>
									<td>
										<h5>{order.email}</h5>
									</td>
									<td>
										<h5>{order.phone}</h5>
									</td>
									<td>
										<h5>
											{order.address},{order.city}
										</h5>
									</td>
									<td>
										{order.order.map((o) => (
											<div className="orderItem h6">
												{o.title}: {o.amount}
											</div>
										))}
									</td>
									<td>
										<h5>{order.totalAmount}</h5>
									</td>
									<td>
										<Button
											variant="danger"
											onClick={() => handleDelete(order._id)}
										>
											Delete
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
				<Col lg={12} sm={12} className="text-center mt-5">
					<h1>Payment system coming soon</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default MyOrder;
