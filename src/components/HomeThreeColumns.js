import React from 'react';
import background from '../assets/3_Columns_Background@2x.png';

export const HomeThreeColumns = () => {
    return (
        <>
            <section className='threeColumns' style={{ 'backgroundImage': `url(${background})` }}>
                <div className='threeColumns__container'>
                    <div className='threeColumns__bags'>
                        <p className='threeColumns__numbers'>10</p>
                        <h2 className='threeColumns__h2'>oddanych worków</h2>
                        <p className='threeColumns__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className='threeColumns__help'>
                        <p className='threeColumns__numbers'>5</p>
                        <h2 className='threeColumns__h2'>wspartych organizacji</h2>
                        <p className='threeColumns__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className='threeColumns__collection'>
                        <p className='threeColumns__numbers'>7</p>
                        <h2 className='threeColumns__h2'>zorganizowanych zbiórek</h2>
                        <p className='threeColumns__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeThreeColumns;