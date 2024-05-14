import React from 'react';
import style from './Hero.module.scss';
import { SectionTitle } from '../../components/Title/Sectiontitle';
import photo from '../../components/Galery/photo.jpg';

export const Hero = () => {
	return (
		<div className={style.backgroud}>
			<div className={style.wrapper}>
				<img src={photo} alt='Ihor Boichuk' className={style.photo} />
				<div className={style.titleWrapper}>
					<SectionTitle title='Ihor Boichuk' color='white'></SectionTitle>
					<p className={style.description}>Frontend Developer</p>
				</div>
			</div>
		</div>
	);
};
