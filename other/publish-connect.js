const publish$ = Rx.Observable.ajax('https://api.punkapi.com/v2/beers').publish();

// 1x ajax call after 1s
publish$.subscribe(console.log);
publish$.subscribe(console.log);

setTimeout(() => {
    publish$.connect();
}, 1000);
