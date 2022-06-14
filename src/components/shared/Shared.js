import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import HomeBanner2 from '../HomeBanner2/HomeBanner2';
import Menu2 from '../Menu2/Menu2';
import Newsletter from '../Newsletter/Newsletter';
import OurDetails from '../OurDetails/OurDetails';
import Review from '../Review/Review';
import SearchProducts from '../SearchProducts/SearchProducts';

const Shared = ({ products, setDisplayProducts, displayProducts }) => {
	return (
		<>
			<HomeBanner2
				setDisplayProducts={setDisplayProducts}
				products={products}
			/>
			<SearchProducts displayProducts={displayProducts} />
			<Gallery />

			<Menu2 products={products} />

			<OurDetails />
			<Review />
			<Newsletter />
		</>
	);
};

export default Shared;
