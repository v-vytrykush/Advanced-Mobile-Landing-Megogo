import React from 'react';
import '../styles/Section2.scss';
import BurgerMenu from './BurgerMenu';

const Section2 = () => (
    <div className="section section2">
        <BurgerMenu />
        <div className="content">
            <h1>Дивіться ТБ та кіно без реклами в єдиній передплаті</h1>
            <p>Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.</p>
        </div>
        <div className="scroll-arrow" onClick={() => fullpage_api.moveSectionDown()}></div>
    </div>
);

export default Section2;