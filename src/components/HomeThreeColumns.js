import React from 'react';
import background from '../assets/3_Columns_Background@2x.png';

export const HomeThreeColumns = () => {
    return (
        <>
            <section className='threeColumns' style={{ 'backgroundImage': `url(${background})` }}>
                <div className='threeColumns__container'></div>
            </section>
        </>
    )
}

export default HomeThreeColumns;