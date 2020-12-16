import React from 'react';

export const HomeNav = () => {
    return (
        <nav className='nav'>
            <div className='nav__buttons'>
                <btn className='nav__btnLink'>Zaloguj</btn>
                <btn className='nav__btnLink'>Załó konto</btn>
            </div>
            <ul className='nav__list'>
                <li className='nav__item'>Start</li>
                <li className='nav__item'>O co chodzi?</li>
                <li className='nav__item'>O nas</li>
                <li className='nav__item'>Fundacja i organizacje</li>
                <li className='nav__item'>Kontakt</li>
            </ul>

        </nav>
    );
};

export default HomeNav;
