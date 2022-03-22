import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../assets/logo2.png';

const Footer = () => {
	return (
		<div className="bg-dark py-5">
			<Container>
				<Row>
					<Col
						md={3}
						className="d-flex flex-column align-item-between text-start"
					>
						<div className="mb-5">
							<Image src={logo} fluid className="w-75" />
						</div>
						<div>
							<p className="text-light">&copy; 2021</p>
						</div>
					</Col>
					<Col
						md={9}
						className="d-flex justify-content-end align-items-center gap-5 text-light"
					>
						<div>
							<p>About online food</p>
							<p>Read our blog</p>
							<p>Sign up to deliver</p>
							<p>Add your Restaurants</p>
						</div>
						<div>
							<p>Get help</p>
							<p>Read FAQs</p>
							<p>View all cities</p>
							<p>Restaurants near me</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
