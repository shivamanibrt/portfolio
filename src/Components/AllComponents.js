import React from 'react';
import { Hero } from './Hero';
import { RecentWork } from './RecentWork';
import { GetInTouch } from './GetInTouch.js';
import { TechStack } from './TechStack';
import ContactUsFile from './ContactUsFile';

function AllComponents({ isDarkMode }) {
    return (
        <>
            <Hero isDarkMode={isDarkMode} />
            <RecentWork isDarkMode={isDarkMode} />
            <TechStack isDarkMode={isDarkMode} />
            <GetInTouch isDarkMode={isDarkMode} />
            <ContactUsFile isDarkMode={isDarkMode} />
        </>
    );
}

export default AllComponents;
