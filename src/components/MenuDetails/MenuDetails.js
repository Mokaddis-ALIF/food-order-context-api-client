import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { items } from '../Data/Data';
import './MenuDetails.css';
import Button from 'react-bootstrap/Button';

const MenuDetails = () => {
	const { id } = useParams();

	const newitem = items.find((item) => item._id == id);
	const { title, price, img, desc } = newitem;

	return (
		<div id="details">
			{/* <Container>
				<Row>
					<Col
						sm={7}
						className="d-flex flex-column justify-content-center align-item-center"
					>
						<div className="text-start">
							<h1>{title}</h1>
							<p>{desc}</p>
							<h1>${price}</h1>
							<div className="d-flex flex-row justify-content-start">
								<Button onClick className="mx-1" variant="danger">
									Add
								</Button>
								<Button className="mx-1 ms-3" variant="light"></Button>
								<span className="text-danger mx-1">quantity</span>
								<Button className="mx-1" variant="light"></Button>
							</div>
						</div>
					</Col>
					<Col sm={5}>
						<Image src={img} fluid />
					</Col>
				</Row>
			</Container> */}
		</div>
	);
};

export default MenuDetails;
