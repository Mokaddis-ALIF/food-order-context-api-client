import React from 'react';
import MainMenuItem from './MainMenuItem/MainMenuItem';

const MenuInfo = ({ items }) => {
	//Shuffle data
	const shuffle = (myArr) => {
		var ctr = myArr.length,
			temp,
			index;

		// While there are elements in the array
		while (ctr > 0) {
			// Pick a random index
			index = Math.floor(Math.random() * ctr);
			// Decrease ctr by 1
			ctr--;
			// And swap the last element with it
			temp = myArr[ctr];
			myArr[ctr] = myArr[index];
			myArr[index] = temp;
		}
		return myArr;
	};
	const newItems = shuffle(items);

	return (
		<div className="container py-3">
			<div className="row">
				{newItems.slice(0, 6).map((menuItem) => (
					<MainMenuItem menuItem={menuItem} key={menuItem._id} />
				))}
			</div>
		</div>
	);
};

export default MenuInfo;
