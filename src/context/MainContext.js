import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || [],
};

export const MainContext = createContext(initialState);

const MainContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    };
    const addTransaction = (data) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: data,
        });
    };

    return (
        <MainContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};
export default MainContextProvider;
