import React from 'react';
import decoration from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg';
import team from '../assets/People@2x.png';

export const HomeAboutUs = () => {
    return (
        <>
            <section id='aboutUs' className='aboutUs'>
                <div className="aboutUs__container">
                    <div className="aboutUs__wrapperText">
                        <h2 className="aboutUs__h2">O nas</h2>
                        <img src={decoration} className='aboutUs__decorationImage' alt="decoration" />
                        <p className="aboutUs__text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={signature} className='aboutUs__signatureImage aboutUs__signatureImage--toRight' alt="signature" />
                    </div>

                    <div className="aboutUs__image">
                        <img src={team} className='aboutUs__teamImage' alt="team" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeAboutUs;
