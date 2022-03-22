import React from 'react';
import { Image } from 'react-bootstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ title, price, amount, img, onRemove, onAdd, onClear }) => {
	return (
		<>
			<div className="d-flex justify-content-between align-items-center py-2 border-bottom">
				<Image src={img} thumbnail className="w-25 border-0" />
				<h5 className="text-danger">
					<i>{title}</i>
				</h5>
				<div>
					<b className="d-flex justify-content-between align-items-center gap-1 h5">
						${price}
						<div className="text-danger">X</div>
						{amount}
					</b>
				</div>
				<div className="cart_quantity d-flex justify-content-between align-items-center gap-2">
					<div className="h5" onClick={onAdd}>
						<AiOutlinePlus />
					</div>
					<div className="quantity text-danger h4">{amount}</div>
					<div className="h5">
						<AiOutlineMinus onClick={onRemove} />
					</div>
					<div className="text-danger h5" onClick={onClear}>
						<MdDelete />
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
