import React, { createContext, useState } from 'react';

const initialState = {
    isDark: localStorage.getItem('isDark') === 'true',
    lightTheme: {
        bg: '#fff',
        textPrimary: '#525456',
        textSecondary: '#777',
        paper: '#f7f7f7',
        lightGreen: '#E8F5E9',
        darkGreen: '#388E3C',
        lightRed: '#FFEBEE',
        darkRed: '#E53935',
        shadow: 'rgba(200,200,200,.5)',
    },
    darkTheme: {
        bg: '#313131',
        textPrimary: '#eeeeee',
        textSecondary: '#eeeeee',
        paper: '#414141',
        lightGreen: '#E8F5E9',
        darkGreen: '#388E3C',
        lightRed: '#FFEBEE',
        darkRed: '#EC625F',
        shadow: '#222222',
    },
};

export const ThemeContext = createContext(initialState);

const ThemeContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const toggleTheme = () => {
        setState({ ...state, isDark: !state.isDark });
        localStorage.setItem('isDark', !state.isDark);
    };
    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeContextProvider;
