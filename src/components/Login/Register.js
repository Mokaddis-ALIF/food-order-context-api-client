import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo2.png';

const Register = () => {
	return (
		<div className="bg_img py-5">
			<div className="color-overlay d-flex flex-column justify-content-center align-items-center">
				<Image src={Logo} thumbnail className="h-25" />
				<Form className="mt-5 w-25">
					<Form.Group className="mb-3 pb-3" controlId="formBasicEmail">
						{/* <Form.Label>Email address</Form.Label> */}
						<Form.Control
							className="border-0"
							type="email"
							placeholder="Enter email"
						/>
					</Form.Group>

					<Form.Group className="mb-3 pb-3" controlId="formBasicPassword">
						{/* <Form.Label>Password</Form.Label> */}
						<Form.Control
							className="border-0"
							type="password"
							placeholder="Enter Password"
						/>
					</Form.Group>
					<Form.Group className="mb-3 pb-3" controlId="formBasicPassword">
						{/* <Form.Label>Password</Form.Label> */}
						<Form.Control
							className="border-0"
							type="password"
							placeholder="Re-type Password"
						/>
					</Form.Group>

					<Button className="w-100" variant="danger" type="submit">
						Register
					</Button>
					<Link to="/login" style={{ textDecoration: 'none' }}>
						<p className="lead text-dark text-center">Already a member?</p>
					</Link>
				</Form>
			</div>
		</div>
	);
};

export default Register;
