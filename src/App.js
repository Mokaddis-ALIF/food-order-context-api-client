import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shared from './components/shared/Shared';
import MenuDetails from './components/MenuDetails/MenuDetails';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Footer from './components/Footer/Footer';
import MyOrder from './components/MyOrder/MyOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

function App() {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [httpError, setHttpError] = useState('');

	const fetchProducts = async () => {
		const response = await fetch(
			`https://sheltered-forest-65434.herokuapp.com/products`
		);

		if (!response.ok) {
			throw new Error('Something went wrong!');
		}

		const data = await response.json();
		setProducts(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts().catch((error) => {
			setHttpError(error.message);
		});
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	if (httpError) {
		return (
			<section className="MealsError">
				<p>{httpError}</p>
			</section>
		);
	}

	return (
		<>
			<CartProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							{loading ? (
								<>
									<div className="spinner">
										{[...Array(5)].map((i) => (
											<Spinner animation="border" variant="danger" />
										))}
									</div>
								</>
							) : (
								<>
									<Shared
										setDisplayProducts={setDisplayProducts}
										products={products}
										displayProducts={displayProducts}
									/>
								</>
							)}
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
						<PrivateRoute exact path="/order">
							<Order />
						</PrivateRoute>
						<PrivateRoute exact path="/my-orders">
							<MyOrder />
						</PrivateRoute>
						<Route exact path="/details/:id">
							<MenuDetails />
						</Route>
						<Route exact path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</CartProvider>
		</>
	);
}

export default App;
