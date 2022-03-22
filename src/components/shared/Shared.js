import React from 'react';
import Gallery from '../Gallery/Gallery';
import HomeBanner2 from '../HomeBanner2/HomeBanner2';
import Menu from '../Menu/Menu';
import OurDetails from '../OurDetails/OurDetails';
import Footer from '../Footer/Footer';

const Shared = () => {
	return (
		<>
			<HomeBanner2 />
			<Gallery />
			<Menu />
			<OurDetails />

			<Footer />
		</>
	);
};

export default Shared;
