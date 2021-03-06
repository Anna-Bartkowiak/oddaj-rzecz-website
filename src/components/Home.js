import React from 'react';
// import HomeNav from './HomeNav';
import HomeHeaderNav from './HomeHeaderNav';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';

export const Home = () => {
    return (
        <>
            <HomeHeaderNav />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    );
};

export default Home;

