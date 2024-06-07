import React from 'react';
import '../styles/Section4.scss';

const Section4 = () => (
    <div className="section section4">
        <div className="background">
            <div className="overlay">
                <div className="content">
                    <div className="subscription">
                        <p className="plan-type">Передплата</p>
                        <h2 className="plan-name">Оптимальна</h2>
                    </div>
                    <div className="details">
                        <h1>10000 фільмів та&nbsp;160+&nbsp;каналів</h1>
                        <p className="description">Голлівудська класика та свіжі кіно-новинки за підпискою, прямі футбольні трансляції та понад&nbsp;160&nbsp;каналів</p>
                    </div>
                    <div className="price-details">
                        <p className="price">від 1 грн</p>
                        <button className="try-button">СПРОБУВАТИ</button>
                        <p className="trial">Перші 14 Днів За 1 Грн</p>
                        <p className="price-details">Далі — 97 Грн/Міс.</p>
                        <p className="more-details">ДЕТАЛЬНІШЕ</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default Section4;
