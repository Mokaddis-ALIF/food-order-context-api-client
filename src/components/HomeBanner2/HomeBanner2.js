import React from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';
import './HomeBanner2.css';

const HomeBanner2 = ({ setDisplayProducts, products }) => {
	return (
		<div className="bg_img">
			<div className="color-overlay d-flex justify-content-center align-items-center">
				<div className="bg_content d-flex flex-column justify-content-center align-items-center">
					<h2 className="">Best food waiting for your belly</h2>
					<SearchContainer
						setDisplayProducts={setDisplayProducts}
						products={products}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeBanner2;
