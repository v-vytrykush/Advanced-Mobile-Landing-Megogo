import React, { useEffect } from 'react';
import fullpage from './fullpage.extensions.min.js';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import './styles/reset.scss';
import './styles/index.scss';
import './styles/App.scss';

const App = () => {
    useEffect(() => {
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollHorizontally: true,
            fadingEffect: true, 
        });
    }, []);

    return (
        <div id="fullpage">
            <div className="section"><Section1 /></div>
            <div className="section"><Section2 /></div>
            <div className="section"><Section3 /></div>
            <div className="section"><Section4 /></div>
            <div className="section"><Section5 /></div>
            <div className="section"><Section6 /></div>
        </div>
    );
};

export default App;