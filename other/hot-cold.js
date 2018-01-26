const cold$ = Rx.Observable.ajax('https://api.punkapi.com/v2/beers');

// 2x ajax call
cold$.subscribe(aluev => console.log('cold', value));
cold$.subscribe(aluev => console.log('cold', value));

// // vs // //

const hot$ = Rx.Observable.ajax('https://api.punkapi.com/v2/beers').share();

// 1x ajax call
hot$.subscribe(value => console.log('hot', value));
hot$.subscribe(value => console.log('hot', value));
