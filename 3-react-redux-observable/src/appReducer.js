const initialState = { query: '', list: [], loading: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return { ...state, query: action.payload };
        case 'RESULTS':
            return { ...state, list: action.payload };
        case 'LOADING':
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};
