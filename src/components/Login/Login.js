import React, { useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo2.png';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleGoogleSignIn = () => {
		googleSignIn(location, history);
	};

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		loginUser(loginData.email, loginData.password, location, history);
	};

	return (
		<div className="bg_img py-5" style={{ height: '100vh' }}>
			<div className="color-overlay d-flex flex-column justify-content-center align-items-center">
				<Image src={Logo} thumbnail className="w-25 border-0" />
				<Form className="mt-5 w-25" onSubmit={handleLoginSubmit}>
					<Form.Group className="mb-3 pb-3" controlId="formBasicEmail">
						{/* <Form.Label>Email address</Form.Label> */}
						<Form.Control
							className="border-top-0"
							type="email"
							name="email"
							id="email"
							required
							onChange={handleOnChange}
							placeholder="Enter email"
						/>
					</Form.Group>

					<Form.Group className="mb-3 pb-3" controlId="formBasicPassword">
						{/* <Form.Label>Password</Form.Label> */}
						<Form.Control
							className="border-top-0"
							type="password"
							name="password"
							id="password"
							required
							onChange={handleOnChange}
							placeholder="Enter Password"
						/>
					</Form.Group>

					<Button className="w-100" variant="danger" type="submit">
						Login
					</Button>
					<Button
						className="w-100 my-2"
						variant="success"
						type="submit"
						onClick={handleGoogleSignIn}
					>
						Sign in by Google
					</Button>
					{user.email && <p>User login done successfully</p>}
					{authError && <p>{authError}</p>}
					<Link to="/register" style={{ textDecoration: 'none' }}>
						<p className="lead text-dark text-center">Create an account here</p>
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Login;
