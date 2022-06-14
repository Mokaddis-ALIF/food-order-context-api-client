import React, { useState } from 'react';
import './Menu2.css';
import title from '../../assets/images/title-shape.svg';
import { Button } from 'react-bootstrap';
import MainMenuItem from '../MenuInfo/MainMenuItem/MainMenuItem';

const names = ['Breakfast', 'Lunch', 'Dinner'];

const Menu2 = ({ products }) => {
	const [menuTab, setMenuTab] = useState(names[1]);

	const handleMenuTabs = (type) => {
		setMenuTab(type);
	};

	const newItems = products.filter((item) => menuTab === item.category);

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
				<div>
					<div className="food2-btns">
						{names.map((item, i) => (
							<Button
								key={i}
								className="py-2 px-4"
								variant={menuTab === `${item}` ? `outline-danger` : 'danger'}
								onClick={() => handleMenuTabs(`${item}`)}
							>
								{item}
							</Button>
						))}
					</div>
					<div className="row">
						{newItems.slice(0, 6).map((menuItem) => (
							<MainMenuItem menuItem={menuItem} key={menuItem._id} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Menu2;
