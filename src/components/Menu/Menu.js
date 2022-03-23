import React from 'react';
import './Menu.css';
import Categories from '../Categories/Categories';
import MenuInfo from '../MenuInfo/MenuInfo';

const Menu = ({ products, menuItem, setMenuItem, categories, filterItems }) => {
	return (
		<>
			<section className="menu-section py-5 my-2">
				<Categories categories={categories} filterItems={filterItems} />
				<MenuInfo items={menuItem} />
			</section>
		</>
	);
};

export default Menu;
