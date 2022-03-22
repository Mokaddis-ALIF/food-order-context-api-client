import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import our1 from '../../assets/Image/adult-blur-blurred-background-687824.png';
import our2 from '../../assets/Image/chef-cook-food-33614.png';
import our3 from '../../assets/Image/architecture-building-city-2047397.png';
import './OurDetails.css';
import delivery from '../../assets/ICON/Group 245.png';
import train from '../../assets/ICON/Group 204.png';
import ring from '../../assets/ICON/Group 1133.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

const data = [
	{
		id: 1,
		src1: our1,
		src2: delivery,
		h5: 'Fast Delivery',
		p: 'Fast Deliver is a fast growing and promising courier and parcel service in Bangladesh. With excellent customer service.',
	},
	{
		id: 2,
		src1: our2,
		src2: train,
		h5: 'A Good Responder',
		p: 'With the right attitude,self-motivated,fully organized,having compassion at vulnerable moments',
	},
	{
		id: 3,
		src1: our3,
		src2: ring,
		h5: 'Home Delivery',
		p: 'Delivery is the process of transporting goods from a source location to a predefined destination',
	},
];

const OurDetails = () => {
	return (
		<Container className="pb-3">
			<div className="text-start mb-4">
				<h1>Why Choose us</h1>
			</div>

			<Row>
				{data.map((item) => (
					<Col
						sm={6}
						md={4}
						key={item.id}
						className="d-flex flex-column justify-content-center align-items-center"
					>
						<div
							style={{ width: '18rem' }}
							className="d-flex flex-column justify-content-center align-items-center"
						>
							<Image src={item.src1} className="img-fluid" />
							<div className="main d-flex flex-column justify-content-center py-3">
								<div className="d-flex justify-content-evenly align-items-start">
									<Image src={item.src2} fluid />
									<div className="ms-3">
										<h5>{item.h5}</h5>
										<p>{item.p}</p>
										<div className="d-flex">
											<Button variant="outline-info" size="sm">
												See More
											</Button>
											<div className="ms-3 px-2 bg-info rounded-circle text-dark">
												<AiOutlineArrowRight />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default OurDetails;
