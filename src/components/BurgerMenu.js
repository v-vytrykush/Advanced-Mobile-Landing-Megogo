import React, { useState } from 'react';
import '../styles/BurgerMenu.scss';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={toggleMenu}>×</button>
                <ul>
                    <li><a href="#section3">Фільми</a></li>
                    <li><a href="#section4">Передплата</a></li>
                    <li><a href="#section5">Подарунки</a></li>
                    <li className="connect-buttton"><a href="#section6">Підключайся</a></li>
                </ul>
                <div className='logo'></div>
            </nav>
        </div>
    );
};

export default BurgerMenu;
