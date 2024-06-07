import React from 'react';
import '../styles/Section6.scss';

const Section6 = () => (
    <div className="section section6">
        <div className="content">
            <h1>Підключіть передплату за&nbsp;1&nbsp;грн та&nbsp;отримуйте:</h1>
            <div className="features">
                <div className="feature">
                    <h2>ТВ-архів</h2>
                    <p>телепередач до 14 днів</p>
                </div>
                <div className="feature">
                    <h2>Full HD</h2>
                    <p>якість тільки за передплатою</p>
                </div>
                <div className="feature">
                    <h2>10% знижка</h2>
                    <p>на прем'єри</p>
                </div>
                <div className="feature">
                    <h2>5 пристроїв</h2>
                    <p>в одній передплаті</p>
                </div>
                <div className="feature">
                    <h2>Без реклами</h2>
                    <p>на всіх фільмах та мультфільмах</p>
                </div>
            </div>
            <button className="subscribe-button">Підключити</button>
        </div>
    </div>
);

export default Section6;