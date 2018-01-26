import { combineEpics } from 'redux-observable';
import Rx from 'rxjs';
import { results, loading } from './appActions';

const URL = 'https://api.punkapi.com/v2/beers?beer_name=';

const searchEpic = action$ =>
    action$
        .ofType('SEARCH')
        .filter(action => action.payload !== '')
        .debounceTime(1000)
        .switchMap(action =>
            Rx.Observable.ajax(URL + action.payload)
                .map(({ response }) => results(response))
                .takeUntil(action$.ofType('SEARCH'))
                .startWith(loading(true)),
        );

const isLoading = action$ => action$.ofType('RESULTS').mapTo(loading(false));

export default combineEpics(searchEpic, isLoading);
