import React, { useContext } from 'react';
import './styles/Activity.css';
import { MainContext } from '../context/MainContext';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export const ActivityItem = ({
    homePage,
    arrayIndex,
    id,
    label,
    amount,
    transactionType,
}) => {
    const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);
    const { deleteTransaction } = useContext(MainContext);
    const handleClick = () => {
        if (
            window.confirm(
                'Do you want to delete this transaction?\nThis action cannot be undone.'
            )
        ) {
            deleteTransaction(id);
        }
    };
    return (
        <div
            className='ai-container'
            style={{
                boxShadow: `0 2px 4px ${
                    isDark ? darkTheme.shadow : lightTheme.shadow
                }`,
                display: arrayIndex > 2 && homePage ? 'none' : 'flex',
            }}
            onClick={handleClick}
        >
            <div className='ai-ei-info'>
                <div
                    className='ai-badge'
                    style={{
                        backgroundColor:
                            transactionType === 'income'
                                ? isDark
                                    ? darkTheme.darkGreen
                                    : lightTheme.lightGreen
                                : isDark
                                ? darkTheme.darkRed
                                : lightTheme.lightRed,
                    }}
                >
                    <i
                        className='material-icons'
                        style={{
                            color:
                                transactionType === 'income'
                                    ? isDark
                                        ? darkTheme.lightGreen
                                        : lightTheme.darkGreen
                                    : isDark
                                    ? darkTheme.lightRed
                                    : lightTheme.darkRed,
                        }}
                    >
                        {transactionType === 'income'
                            ? 'trending_up'
                            : 'trending_down'}
                    </i>
                </div>
                <h1
                    style={{
                        color:
                            transactionType === 'income'
                                ? isDark
                                    ? darkTheme.darkGreen
                                    : lightTheme.darkGreen
                                : isDark
                                ? darkTheme.darkRed
                                : lightTheme.darkRed,
                    }}
                >
                    ${amount}
                </h1>
            </div>
            <p
                style={{
                    color: isDark
                        ? darkTheme.textPrimary
                        : lightTheme.textPrimary,
                }}
            >
                {label}
            </p>
        </div>
    );
};

const Activity = () => {
    const { transactions } = useContext(MainContext);
    const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);

    return (
        <div className='ac-wrapper'>
            <div className='ac-header'>
                <h1
                    style={{
                        color: isDark
                            ? darkTheme.textPrimary
                            : lightTheme.textPrimary,
                    }}
                >
                    Activity
                </h1>
                <Link
                    to='/activity'
                    style={{
                        display: transactions.length > 3 ? 'block' : 'none',
                    }}
                >
                    <h1
                        style={{
                            margin: 0,
                            color: isDark
                                ? darkTheme.textPrimary
                                : lightTheme.textPrimary,
                        }}
                    >
                        View all
                    </h1>
                </Link>
            </div>
            <div className='ac-container'>
                {transactions.length === 0 ? (
                    <h1
                        className='empty'
                        style={{
                            color: isDark
                                ? darkTheme.textPrimary
                                : lightTheme.textPrimary,
                        }}
                    >
                        No activity to show
                    </h1>
                ) : (
                    transactions.map((item, idx) => (
                        <ActivityItem
                            key={idx}
                            homePage
                            arrayIndex={idx}
                            id={item.id}
                            amount={item.amount}
                            label={item.label}
                            transactionType={item.transactionType}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Activity;
