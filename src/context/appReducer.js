const updateStorage = (data) => {
    localStorage.setItem('transactions', JSON.stringify(data));
};

export default (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            state = {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
            state.transactions.sort((a, b) => b.timestamp - a.timestamp);
            updateStorage(state.transactions);
            return state;
        case 'DELETE_TRANSACTION':
            state = {
                ...state,
                transactions: state.transactions.filter(
                    (item) => item.id !== action.payload
                ),
            };
            updateStorage(state.transactions);
            return state;
        default:
            return state;
    }
};
