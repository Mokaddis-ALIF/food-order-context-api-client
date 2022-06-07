import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Categories = ({ categories, filterItems }) => {
	const [clicked, setClicked] = useState(false);
	console.log(clicked);

	return (
		<div className="d-flex flex-row justify-content-center">
			{categories.map((category, index) => {
				return (
					<Button
						type="button"
						variant={clicked === true ? `outline-danger` : `danger`}
						className="me-3"
						key={index}
						onClick={() => {
							filterItems(category);
							setClicked(true);
						}}
					>
						{category}
					</Button>
				);
			})}
		</div>
	);
};

export default Categories;
