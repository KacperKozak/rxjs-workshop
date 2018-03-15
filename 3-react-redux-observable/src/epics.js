import { combineEpics } from "redux-observable";
import Rx from "rxjs";
import { results, loading } from "./appActions";

const URL = "https://api.punkapi.com/v2/beers?beer_name=";

const searchEpic = action$ => null;

export default searchEpic;
