export const search = query => ({ type: 'SEARCH', payload: query });
export const results = list => ({ type: 'RESULTS', payload: list });
export const loading = state => ({ type: 'LOADING', payload: state });
