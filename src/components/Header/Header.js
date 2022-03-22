import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import { BsCart } from 'react-icons/bs';
import CartContext from '../../store/cart-context';

const Header = () => {
	const cartCtx = useContext(CartContext);

	const cartItemNumbers = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="light"
				variant="light"
				sticky="top"
				className="shadow"
			>
				<Container>
					<Link to="/">
						<Navbar.Brand>
							<Image
								src={logo}
								thumbnail
								className="border-0"
								style={{ height: '60px' }}
							/>
						</Navbar.Brand>
					</Link>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ms-auto">
							{/* <Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link> */}
							<NavLink
								className="my-auto ms-3"
								style={{
									color: 'black',
									fontSize: '20px',
									textDecoration: 'none',
								}}
								to="/cart"
							>
								<div className="h3">
									<BsCart />
									{cartItemNumbers === 0 ? '' : cartItemNumbers}
								</div>
							</NavLink>
							<NavLink className="ms-3" to="/login">
								<Button className="rounded-pill px-3" variant="light">
									Login
								</Button>
							</NavLink>
							<NavLink className="ms-3" to="/register">
								<Button className="rounded-pill px-3" variant="danger">
									Sign up
								</Button>
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
