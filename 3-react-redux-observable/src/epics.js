import { combineEpics } from 'redux-observable';
import Rx from 'rxjs';
import { results } from './appActions';

const pingEpic = action$ =>
    action$
        .ofType('SEARCH')
        .filter(action => action.payload !== '')
        .debounceTime(1000)
        .switchMap(action =>
            Rx.Observable.ajax(
                'https://api.punkapi.com/v2/beers?beer_name=' + action.payload,
            )
                .map(({ response }) => results(response))
                .takeUntil(action$.ofType('SEARCH')),
        );

export default combineEpics(pingEpic);
