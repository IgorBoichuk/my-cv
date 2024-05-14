import React from 'react';
import style from './Hero.module.scss';
import { SectionTitle } from '../../components/Title/Sectiontitle';

export const Hero = () => {
	return (
		<div className={style.backgroud}>
			<SectionTitle title='Hero' color='white'></SectionTitle>
		</div>
	);
};
