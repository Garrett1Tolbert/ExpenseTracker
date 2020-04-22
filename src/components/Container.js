import React, { useContext } from 'react';
import './styles/Container.css';
import { ThemeContext } from '../context/ThemeContext';

export default ({ children }) => {
    const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);
    return (
        <div
            className='app'
            style={{
                backgroundColor: isDark ? darkTheme.bg : lightTheme.bg,
            }}
        >
            {children}
        </div>
    );
};
