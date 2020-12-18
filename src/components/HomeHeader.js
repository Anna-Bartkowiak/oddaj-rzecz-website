import React from 'react';

export const HomeHeader = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__imageWrapper'>
                    <img src='../assets/Hero Image.png' className='header__image' alt=''></img>
                </div>
                <div className='header__textWrapper'>
                    <h1 className='header__textH1'>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
            </div>

        </header>
    );
};

export default HomeHeader;