import React, { useContext, useEffect, useState } from 'react';
import './styles/CurrentBalance.css';
import { ThemeContext } from '../context/ThemeContext';
import { MainContext } from '../context/MainContext';
import { useCountUp } from 'react-countup';

const CurrentBalance = () => {
    const [currBalance, setCurrBalance] = useState(0);
    const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);
    const { transactions } = useContext(MainContext);

    const { countUp, update } = useCountUp({
        start: 0,
        end: Math.abs(currBalance).toFixed(2),
        decimals: '2',
        delay: 1000,
        duration: 0.75,
    });
    useEffect(() => {
        update(Math.abs(currBalance).toFixed(2));
    }, [currBalance, update]);
    const incomes = transactions.filter(
        (item) => item.transactionType === 'income'
    );
    const expenses = transactions.filter(
        (item) => item.transactionType === 'expense'
    );

    useEffect(() => {
        setCurrBalance(
            incomes.reduce((acc, curr) => (acc += curr.amount), 0) +
                expenses.reduce((acc, curr) => (acc += curr.amount), 0) * -1
        );
    }, [incomes, expenses]);

    return (
        <div
            className='cb-wrapper'
            style={{ backgroundColor: isDark ? darkTheme.bg : lightTheme.bg }}
        >
            <h3
                style={{
                    color: isDark
                        ? darkTheme.textPrimary
                        : lightTheme.textPrimary,
                }}
            >
                Current Balance
            </h3>
            <h1
                style={{
                    color: isDark
                        ? darkTheme.textPrimary
                        : lightTheme.textPrimary,
                }}
            >
                {currBalance < 0 ? '-' : ''}${countUp}
            </h1>
        </div>
    );
};

export default CurrentBalance;
