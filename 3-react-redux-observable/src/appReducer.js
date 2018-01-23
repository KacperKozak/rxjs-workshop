export default (state = { query: '', list: [] }, action) => {
    switch (action.type) {
        case 'SEARCH':
            return { ...state, query: action.payload };
        case 'RESULTS':
            return { ...state, list: action.payload };
        default:
            return state;
    }
};
