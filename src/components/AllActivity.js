import React, { useContext } from 'react';
import './styles/AllActivity.css';
import { MainContext } from '../context/MainContext';
import { ThemeContext } from '../context/ThemeContext';
import { ActivityItem } from './Activity';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

const AllActivity = () => {
    const { transactions } = useContext(MainContext);
    const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);

    return (
        <div className='aa-wrapper'>
            <Link to='/'>
                <div className='home'>
                    <i
                        style={{
                            color: isDark
                                ? darkTheme.textPrimary
                                : lightTheme.textPrimary,
                        }}
                        className='material-icons'
                    >
                        arrow_back
                    </i>
                    <h3
                        style={{
                            color: isDark
                                ? darkTheme.textPrimary
                                : lightTheme.textPrimary,
                        }}
                    >
                        Home
                    </h3>
                </div>
            </Link>
            {transactions.length === 0 ? (
                <>
                    <NotFound />
                    <h1
                        className='notFound'
                        style={{
                            color: isDark
                                ? darkTheme.textPrimary
                                : lightTheme.textPrimary,
                        }}
                    >
                        No activity to show
                    </h1>
                </>
            ) : (
                <>
                    <h1
                        style={{
                            color: isDark
                                ? darkTheme.textPrimary
                                : lightTheme.textPrimary,
                        }}
                    >
                        All Activity
                    </h1>
                    <div className='aa-container'>
                        {transactions.map((item, idx) => (
                            <ActivityItem
                                key={idx}
                                home={false}
                                arrayIndex={idx}
                                id={item.id}
                                amount={item.amount}
                                label={item.label}
                                transactionType={item.transactionType}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
export default AllActivity;
