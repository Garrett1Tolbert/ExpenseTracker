import React, { useContext, useState, useEffect } from 'react';
import './styles/Glimpse.css';
import { ThemeContext } from '../context/ThemeContext';
import { MainContext } from '../context/MainContext';

const Glimpse = () => {
    const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const { transactions } = useContext(MainContext);

    useEffect(() => {
        const calculateFunds = () => {
            const incomes = transactions.filter(
                (item) => item.transactionType === 'income'
            );
            const expenses = transactions.filter(
                (item) => item.transactionType === 'expense'
            );
            setIncome(incomes.reduce((acc, curr) => (acc += curr.amount), 0));
            setExpense(expenses.reduce((acc, curr) => (acc += curr.amount), 0));
        };
        calculateFunds();
    }, [transactions]);

    return (
        <div className='gl-wrapper'>
            <div className='gl-ec'>
                <h1
                    style={{
                        color: isDark
                            ? darkTheme.textPrimary
                            : lightTheme.textPrimary,
                    }}
                >
                    Income
                </h1>
                <p
                    style={{
                        color: isDark
                            ? darkTheme.darkGreen
                            : lightTheme.darkGreen,
                    }}
                >
                    ${income}
                </p>
            </div>
            <div className='gl-ic' style={{ borderBottom: 0 }}>
                <h1
                    style={{
                        color: isDark
                            ? darkTheme.textPrimary
                            : lightTheme.textPrimary,
                    }}
                >
                    Expense
                </h1>
                <p
                    style={{
                        color: isDark ? darkTheme.darkRed : lightTheme.darkRed,
                    }}
                >
                    ${expense.toFixed(2)}
                </p>
            </div>
        </div>
    );
};
export default Glimpse;
