import React from "react";
import { Link as LinkR } from 'react-router-dom';
import { Link as NavLink } from 'react-scroll';
import { BrowserRouter as Link } from "react-router-dom";

export const Register = () => {
    return (
        <>
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
                                className='nav__links'
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
                                to='foundations'
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
            <div className="register__container">
                <div className="register__container--login">Zarejestruj się</div>
                <div className="register__container--asset"></div>
                <form className="register__container--form">
                    <label type="mail" htmlFor="mail">
                        Email
          </label>
                    <input type="mail" id="mail"></input>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" id="password"></input>
                    <label htmlFor="password">Powtórz hasło</label>
                    <input type="password" id="password"></input>
                </form>
                <div className="register__container--register">
                    <p>Załóz konto</p>
                    <Link to="/login">
                        <p>zaloguj się</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Register;