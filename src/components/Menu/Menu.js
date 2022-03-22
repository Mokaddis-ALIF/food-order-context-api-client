import React, { useState } from 'react';
import './Menu.css';
import { items } from '../Data/Data';
import Categories from '../Categories/Categories';
import MenuInfo from '../MenuInfo/MenuInfo';

const allCategories = ['All', ...new Set(items.map((item) => item.category))];

const Menu = () => {
	const [menuItem, setMenuItem] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'All') {
			setMenuItem(items);
			return;
		}

		const newItems = items.filter((item) => item.category === category);
		setMenuItem(newItems);
	};

	return (
		<>
			<section className="menu-section py-5 my-2">
				<Categories categories={categories} filterItems={filterItems} />
				<hr className="bg-danger w-50 mx-auto p-1 rounded" />
				<MenuInfo items={menuItem} />
			</section>
		</>
	);
};

export default Menu;
