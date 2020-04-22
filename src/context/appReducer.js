export default (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            state = {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
            state.transactions.sort((a, b) => b.timestamp - a.timestamp);
            return state;
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(
                    (item) => item.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
