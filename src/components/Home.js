import React from 'react';
import HomeNav from './HomeNav';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeHelpFundations from './HomeHelpFundations';
import HomeHelpLocal from './HomeHelpLocal';
import HomeHelpOrganizations from './HomeHelpOrganizations';
import HomeContact from './HomeContact';

export const Home = () => {
    return (
        <>
            <HomeNav />
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeHelpFundations />
            <HomeHelpLocal />
            <HomeHelpOrganizations />
            <HomeContact />
        </>
    );
};

export default Home;

