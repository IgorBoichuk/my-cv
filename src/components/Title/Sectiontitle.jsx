import React from 'react';
import style from './Sectiontitle.module.scss';

export const SectionTitle = ({ title, color }) => {
	return (
		<div>
			<h2 style={{ color: `${color ? color : 'black'}` }} className={style.title}>
				{title}
			</h2>
		</div>
	);
};
