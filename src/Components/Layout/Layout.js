import React from 'react';
import { NavigationBarFile } from '../NavigationBarFile';
import { FooterFile } from '../FooterFile';

export const Layout = ({ handleThemeChange, isDarkMode, children }) => {
    return (
        <>
            <NavigationBarFile handleThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
            <div className='main-child'>{children}</div>
            <FooterFile isDarkMode={isDarkMode} />
        </>
    );
};
