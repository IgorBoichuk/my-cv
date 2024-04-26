import React from 'react';
import style from './Header.module.scss';

export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.headerWrapper}>
				<ul className={style.headerList}>
					<li className={style.headerItem}>Home</li>
					<li className={style.headerItem}>About</li>
					<li className={style.headerItem}>Skills</li>
					<li className={style.headerItem}>Works</li>
					<li className={style.headerItem}>Contacts</li>
				</ul>
			</div>
		</header>
	);
};
