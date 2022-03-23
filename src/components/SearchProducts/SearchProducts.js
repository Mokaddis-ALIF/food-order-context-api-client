import React from 'react';
import MainMenuItem from '../MenuInfo/MainMenuItem/MainMenuItem';

const SearchProducts = ({ displayProducts }) => {
	return (
		<>
			<div className="container py-3">
				<div className="row">
					{displayProducts.slice(0, 6).map((menuItem) => (
						<MainMenuItem menuItem={menuItem} key={menuItem._id} />
					))}
				</div>
			</div>
		</>
	);
};

export default SearchProducts;
