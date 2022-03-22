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

function App() {
	return (
		<CartProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Shared />
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
					<Route exact path="/details/:id">
						<MenuDetails />
					</Route>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</CartProvider>
	);
}

export default App;
