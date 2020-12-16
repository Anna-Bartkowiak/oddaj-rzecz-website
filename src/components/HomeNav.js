import React from 'react';

export const HomeNav = () => {
    return (
        <nav class='nav'>
            <div class='nav__buttons'>
                <btn class='nav__btnLink'>Zaloguj</btn>
                <btn class='nav__btnLink'>Załó konto</btn>
            </div>
            <ul class='nav__list'>
                <li class='nav__item'>Start</li>
                <li class='nav__item'>O co chodzi?</li>
                <li class='nav__item'>O nas</li>
                <li class='nav__item'>Fundacja i organizacje</li>
                <li class='nav__item'>Kontakt</li>
            </ul>

        </nav>
    )
}

export default HomeNav;
