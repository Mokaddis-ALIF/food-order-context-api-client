import React from 'react';
import './Menu.css';
import Categories from '../Categories/Categories';
import MenuInfo from '../MenuInfo/MenuInfo';
import title from '../../assets/images/title-shape.svg';

const Menu = ({ products, menuItem, setMenuItem, categories, filterItems }) => {
	return (
		<>
			<section className="menu-section pb-5">
				<div className="sec-title text-center mb-5">
					<p className="sec-sub-title mb-3">our menu</p>
					<h2 className="h2-title">
						wake up early, <span>eat fresh & healthy</span>
					</h2>
					<div className="sec-title-shape mb-4">
						<img src={title} alt="" />
					</div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<MenuInfo items={menuItem} />
			</section>
		</>
	);
};

export default Menu;
