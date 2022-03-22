import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Gallery.css';

const data = [
	{
		id: 1,
		src: 'https://i.ibb.co/r5ZTcJr/2e123c1ab1e31167e08ac8a52daa377a.png',
	},
	{
		id: 2,
		src: 'https://i.ibb.co/HPcwTy1/burrito-chicken-close-up-461198.png',
	},
	{
		id: 3,
		src: 'https://i.ibb.co/xH77JJ7/monika-grabkowska-759473-unsplash-2.png',
	},
	{ id: 4, src: 'https://i.ibb.co/d0K3CBH/thanos-pal-598887-unsplash.png' },
];

const Gallery = () => {
	return (
		<Container className="pt-5 pb-3">
			<Row>
				{data.map((item) => (
					<Col lg={3} sm={6} className="mb-4" key={item.id}>
						<Card className="card border-0 d-flex justify-content-center align-items-center">
							<div className="gallery" style={{ width: '16rem' }}>
								<Image src={item.src} fluid />
							</div>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Gallery;
