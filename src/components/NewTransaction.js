import React, { useState, useContext } from 'react';
import './styles/NewTransaction.css';
import { ThemeContext } from '../context/ThemeContext';
import { MainContext } from '../context/MainContext';

const NewTransaction = () => {
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('income');
    const { isDark, lightTheme, darkTheme } = useContext(ThemeContext);
    const { addTransaction } = useContext(MainContext);

    const handleAddClick = (e) => {
        e.preventDefault();
        let temp = parseFloat(parseFloat(amount).toFixed(2));

        if (label !== '' && amount !== '' && parseInt(amount) !== 0) {
            addTransaction({
                id: Math.round(Math.random() * 10000000),
                label,
                amount: temp,
                transactionType,
                timestamp: new Date(),
            });
            setLabel('');
            setAmount('');
            setTransactionType('income');
        }
    };
    return (
        <div className='nt-wrapper'>
            <h1
                style={{
                    color: isDark
                        ? darkTheme.textPrimary
                        : lightTheme.textPrimary,
                }}
            >
                New Transaction
            </h1>
            <form>
                <input
                    type='text'
                    required
                    style={{
                        backgroundColor: isDark ? darkTheme.bg : lightTheme.bg,
                        color: isDark
                            ? darkTheme.textPrimary
                            : lightTheme.textPrimary,
                    }}
                    placeholder='Transaction Label'
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
                <div style={{ width: '100%', position: 'relative' }}>
                    <input
                        type='number'
                        required
                        step='.01'
                        style={{
                            marginBottom: 0,
                            backgroundColor: isDark
                                ? darkTheme.bg
                                : lightTheme.bg,
                            color: isDark
                                ? darkTheme.textPrimary
                                : lightTheme.textPrimary,
                        }}
                        placeholder='Amount ($)'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <div
                        className='select'
                        style={{
                            backgroundColor: isDark
                                ? darkTheme.paper
                                : lightTheme.paper,
                        }}
                    >
                        <select
                            style={{
                                color: isDark
                                    ? darkTheme.textPrimary
                                    : lightTheme.textSecondary,
                            }}
                            value={transactionType}
                            name='transactionType'
                            id='nt-tt'
                            onChange={(e) => setTransactionType(e.target.value)}
                        >
                            <option value='income'>Income</option>
                            <option value='expense'>Expense</option>
                        </select>
                        <i
                            style={{
                                color: isDark
                                    ? darkTheme.textPrimary
                                    : lightTheme.textSecondary,
                            }}
                            className='material-icons'
                            onClick={() =>
                                document.getElementById('nt-tt').click()
                            }
                        >
                            keyboard_arrow_down
                        </i>
                    </div>
                </div>
                <button type='submit' onClick={handleAddClick}>
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default NewTransaction;
