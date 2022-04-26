import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Gallery.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

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
	{ id: 5, src: 'https://i.ibb.co/n8nkZ33/basil-blur-close-up-1437267.png' },
	{
		id: 6,
		src: 'https://i.ibb.co/Jz8HjFy/eduardo-roda-lopes-198465-unsplash.png',
	},
	{
		id: 7,
		src: 'https://i.ibb.co/gzv5GFz/brooke-lark-158019-unsplash.png',
	},
	{
		id: 8,
		src: 'https://i.ibb.co/zHBQC07/edgar-castrejon-1-SPu0-KT-Ejg-unsplash.png',
	},
];

const Gallery = () => {
	return (
		<Container className="pt-5 pb-3">
			<Swiper
				breakpoints={{
					// when window width is >= 640px
					640: {
						width: 640,
						slidesPerView: 1,
					},
					// when window width is >= 768px
					998: {
						width: 998,
						slidesPerView: 3,
					},
				}}
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{data.map((d) => (
					<SwiperSlide key={d.id}>
						<img src={d.src} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

export default Gallery;
