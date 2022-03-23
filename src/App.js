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

function App() {
	const [products, setProducts] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);

	useEffect(() => {
		fetch(`https://sheltered-forest-65434.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, [setProducts]);

	return (
		<CartProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Shared
							setDisplayProducts={setDisplayProducts}
							products={products}
							displayProducts={displayProducts}
						/>
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
					<PrivateRoute exact path="/details/:id">
						<MenuDetails />
					</PrivateRoute>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</CartProvider>
	);
}

export default App;
