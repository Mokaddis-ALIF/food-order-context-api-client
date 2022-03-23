import React from 'react';
import './SearchContainer.css';
import { ImSearch } from 'react-icons/im';

import { Container } from 'react-bootstrap';

const SearchContainer = ({ setDisplayProducts, products }) => {
	const handleSearch = (event) => {
		const searchText = event.target.value;

		const matchedProducts = products.filter((product) =>
			product.category.toLowerCase().includes(searchText.toLowerCase())
		);
		if (searchText.trim().length > 0) {
			setDisplayProducts(matchedProducts);
		} else {
			setDisplayProducts([]);
		}
	};

	return (
		<Container
			fluid
			className="d-flex justify-content-center align-items-center mt-2 py-4"
		>
			<div className="search_wrap search_wrap_3">
				<div className="search_box">
					<input
						type="text"
						className="input"
						onChange={handleSearch}
						placeholder="Search breakfast,lunch &amp; dinner"
					/>
					<div className="btn btn_common">
						<ImSearch className="fas fa-search" />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default SearchContainer;
