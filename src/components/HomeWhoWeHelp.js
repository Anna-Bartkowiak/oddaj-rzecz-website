import React, { useState } from 'react';
// import { Link as LinkR } from 'react-router-dom';
import decoration from '../assets/Decoration.svg';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

export const HomeWhoWeHelp = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <>
            <section id='fund' className='whoWeHelp'>
                <div className='whoWeHelp__container'>
                    <div className='whoWeHelp__textWrapper'>
                        <h1 className='whoWeHelp__textH1'>Komu pomagamy?</h1>
                        <img src={decoration} className='whoWeHelp__decorationImage' alt="decoration" />
                    </div>
                    <Tabs defaultTab="two"
                        onChange={(tabId) => { console.log(tabId) }}>
                        <TabList>
                            <Tab tabFor="one"
                                onClick={() => setActiveIndex(1)}
                                className={(activeIndex === 1 ? 'active ' : '') + "btnMedium"}>
                                Fundacjom społecznym
                            </Tab>
                            <Tab tabFor="two"
                                onClick={() => setActiveIndex(2)}
                                className={(activeIndex === 2 ? 'active ' : '') + "btnMedium"}>
                                Organizacjom<br />pozarządowym
                            </Tab>
                            <Tab tabFor="three"
                                onClick={() => setActiveIndex(3)}
                                className={(activeIndex === 3 ? 'active ' : '') + "btnMedium"}>
                                Lokalnym<br />zbiórkom
                            </Tab>
                        </TabList>
                        <TabPanel tabId="one">
                            <p className='whoWeHelp__textP'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                            <div className="whoWeHelp__entriesWrapper">
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Dbam o Zdrowie”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Dla dzieci”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Bez domu”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, ciepłe koce</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Serduszko”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Motylek”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Tęcza”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, ciepłe koce</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Magiczna”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Radosna”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Fundacja “Dom Jutra”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, ciepłe koce</p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel tabId="two">
                            <p className='whoWeHelp__textP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                            <div className="whoWeHelp__entriesWrapper">
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Organizacja “Serduszko”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Organizacja “Motylek”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Organizacja “Tęcza”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, ciepłe koce</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Organizacja “Magiczna”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Organizacja “Radosna”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Organizacja “Dom Jutra”</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, ciepłe koce</p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel tabId="three">
                            <p className='whoWeHelp__textP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                            <div className="whoWeHelp__entriesWrapper">
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Zbiórka w styczniu</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, ciepłe koce</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Zbiórka w lutym</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                    </div>
                                </div>
                                <div className="whoWeHelp__entry">
                                    <div className="whoWeHelp__entry--left">
                                        <h2 className="whoWeHelp__entryH2">Zbiórka w marcu</h2>
                                        <p className="whoWeHelp__entryGoal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                                    </div>
                                    <div className="whoWeHelp__entry--right">
                                        <p className="whoWeHelp__entryStaff">ubrania, meble, zabawki</p>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    )
}

export default HomeWhoWeHelp;