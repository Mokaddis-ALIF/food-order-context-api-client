import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import HomeBanner2 from '../HomeBanner2/HomeBanner2';
import Menu from '../Menu/Menu';
import Newsletter from '../Newsletter/Newsletter';
import OurDetails from '../OurDetails/OurDetails';
import Review from '../Review/Review';
import SearchProducts from '../SearchProducts/SearchProducts';

const Shared = ({ products, setDisplayProducts, displayProducts }) => {
	const [menuItem, setMenuItem] = useState(products);
	const [categories, setCategories] = useState([
		'All',
		'Breakfast',
		'Lunch',
		'Dinner',
	]);

	const filterItems = (category) => {
		if (category === 'All') {
			setMenuItem(products);
			return;
		}

		const newItems = products.filter((item) => item.category === category);
		setMenuItem(newItems);
	};

	useEffect(() => {
		setMenuItem(products);
	}, [products]);

	return (
		<>
			<HomeBanner2
				setDisplayProducts={setDisplayProducts}
				products={products}
			/>
			<SearchProducts displayProducts={displayProducts} />
			<Gallery />
			<Menu
				products={products}
				menuItem={menuItem}
				setMenuItem={setMenuItem}
				categories={categories}
				filterItems={filterItems}
			/>
			<OurDetails />
			<Review />
			<Newsletter />
		</>
	);
};

export default Shared;
