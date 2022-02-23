import { useEffect, useState } from 'react';
import { randomColor } from './List';

import { memo } from 'react'

const ListItem = ({ item: { id, value }, checkedIds, onCheck }) => {
	const [color, setColor] = useState(`#${randomColor()}`);

const isChecked = checkedIds.includes(id)

	const handleChange = ({ target: { checked } }) => {
		onCheck(checked, id)
	};

	useEffect(() => {
		setColor(`#${randomColor()}`)
	}, [isChecked])

	return (
		<div style={{ userSelect: 'none', background: color }}>
			<input
				id={id}
				type="checkbox"
				checked={isChecked}
				onChange={handleChange}
			/>
			<label htmlFor={id}>{value}; renderID: {color}</label>
		</div>
	);
};

export default memo(ListItem);
