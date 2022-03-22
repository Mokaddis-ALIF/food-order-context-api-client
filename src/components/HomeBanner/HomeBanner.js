import React from 'react';
import B from '../../assets/Image/breakfast.png';
import L from '../../assets/Image/thanos-pal-598887-unsplash.png';
import D from '../../assets/Image/monika-grabkowska-759473-unsplash (2).png';

import { Carousel, Container, Image } from 'react-bootstrap';

const HomeBanner = () => {
	return (
		<section className="home-banner">
			<Carousel fade={true} pause={false}>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={B}
						alt="First slide"
						style={{ height: '500px' }}
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={L}
						alt="Third slide"
						style={{ height: '500px' }}
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={2000}>
					<img
						className="d-block w-100"
						src={D}
						alt="Third slide"
						style={{ height: '500px' }}
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default HomeBanner;
