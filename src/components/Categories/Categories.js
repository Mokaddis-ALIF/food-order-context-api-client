import React from 'react';
import { Button } from 'react-bootstrap';

const Categories = ({ categories, filterItems }) => {
	return (
		<div className="d-flex flex-row justify-content-center">
			{categories.map((category, index) => {
				return (
					<Button
						type="button"
						variant="danger"
						className="me-3"
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</Button>
				);
			})}
		</div>
	);
};

export default Categories;
