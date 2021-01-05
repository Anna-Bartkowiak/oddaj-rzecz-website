import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Link as NavLink } from 'react-scroll';
import background from '../assets/HeroImageSmall.png';
import decoration from '../assets/Decoration.svg';

export const HomeHeaderNav = () => {
    return (
        <>
            <header className='header' style={{ 'backgroundImage': `url(${background})` }}>
                <nav className='nav'>
                    <div className='nav__navbarContainer'>
                        <div className='nav__buttons'>
                            <div className='nav__btn'>
                                <LinkR to="/login" className='nav__btnLinks'>Zaloguj</LinkR>
                            </div>
                            <div className='nav__btn'>
                                <LinkR to="/register" className='nav__btnLinks nav__btnLinks--active'>Załóz konto</LinkR>
                            </div>
                        </div>
                        <ul className='nav__menu'>
                            <li className='nav__item'>
                                <NavLink
                                    to="/"
                                    className='nav__links active'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Start
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    to='steps'
                                    className='nav__links'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    O co chodzi?
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    to='aboutUs'
                                    className='nav__links'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    O nas
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    to='fund'
                                    className='nav__links'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Fundacja i organizacje
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink
                                    to='contact'
                                    className='nav__links'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='header__container'>
                    <div className='header__textWrapper'>
                        <h1 className='header__textH1'>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={decoration} className='header__decorationImage' alt="decoration" />
                        <div className='header__buttonsWrapper'>
                            <button className='btn'>
                                <LinkR to="/login" className='btnLinks'>oddaj<br />rzeczy</LinkR>
                            </button>
                            <button className='btn'>
                                <LinkR to="/login" className='btnLinks'>zorganizuj<br />zbiórkę</LinkR>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HomeHeaderNav;
