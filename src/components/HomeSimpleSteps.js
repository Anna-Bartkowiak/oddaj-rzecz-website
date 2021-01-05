import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import decoration from '../assets/Decoration.svg';
import icon1 from '../assets/Icon-1.png';
import icon2 from '../assets/Icon-2.png';
import icon3 from '../assets/Icon-3.png';
import icon4 from '../assets/Icon-4.png';

export const HomeSimpleSteps = () => {
    return (
        <>
            <section id="steps" className='simpleSteps'>
                <div className="simpleSteps__container">
                    <h2 className="simpleSteps__h2">Wystarczą 4 proste kroki</h2>
                    <div className='simpleSteps__decorationImage' style={{ 'decorationImage': `url(${decoration})` }}></div>
                    <div className="simpleSteps__backgroundContainer">
                        <div className="simpleSteps__columnsContainer">
                            <div className="simpleSteps__chooseContainer">
                                <div className="simpleSteps__icon" style={{ 'icon': `url(${icon1})` }}></div>
                                <h3 className="simpleSteps__h3">Wybierz rzeczy</h3>
                                <hr className="simpleSteps__hr" />
                                <p className="simpleSteps__text">ubrania, zabawki,<br />sprzęt i inne</p>
                            </div>
                            <div className="simpleSteps__chooseContainer">
                                <div className="simpleSteps__icon" style={{ 'icon': `url(${icon2})` }}></div>
                                <h3 className="simpleSteps__h3">Spakuj je</h3>
                                <hr className="simpleSteps__hr" />
                                <p className="simpleSteps__text">skorzystaj z<br />worków na śmieci</p>
                            </div>
                            <div className="simpleSteps__chooseContainer">
                                <div className="simpleSteps__icon" style={{ 'icon': `url(${icon3})` }}></div>
                                <h3 className="simpleSteps__h3">Zdecyduj komu<br />chcesz pomóc</h3>
                                <hr className="simpleSteps__hr" />
                                <p className="simpleSteps__text">wybierz zaufane<br />miejsce</p>
                            </div>
                            <div className="simpleSteps__chooseContainer">
                                <div className="simpleSteps__icon" style={{ 'icon': `url(${icon4})` }}></div>
                                <h3 className="simpleSteps__h3">Zamów kuriera</h3>
                                <hr className="simpleSteps__hr" />
                                <p className="simpleSteps__text">kurier przyjedzie<br />w dogodnym terminie</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn">
                        <LinkR to="/login" className="btnLinks">oddaj<br />rzeczy</LinkR>
                    </button>
                </div>

            </section>
        </>
    )
}

export default HomeSimpleSteps;