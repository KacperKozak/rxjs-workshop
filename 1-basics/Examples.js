// 2 Card flip with race timer
// https://rxviz.com/v/7JXpv6JV
const click$ = Rx.Observable.fromEvent(document, 'click')
    .mapTo(1)
    .scan((acc, curr) => acc + curr);

const bc2$ = $click
    .bufferCount(2)
    .switchMap(clicks =>
        Rx.Observable.race(Rx.Observable.timer(1000).mapTo('T'), $click.mapTo('C')),
    );

Rx.Observable.merge($click, $bc2);

// Share
const timer$ = Rx.Observable.interval(1000).take(5);

timer$.map(a => 'one: ' + a).subscribe(console.log);
setTimeout(() => {
    timer$.map(a => 'two: ' + a).subscribe(console.log);
}, 3000);

const sharedTimer$ = timer$.map(a => a + ' - shared!').share();

sharedTimer$.map(a => 'one: ' + a).subscribe(console.log);
setTimeout(() => {
    sharedTimer$.map(a => 'two: ' + a).subscribe(console.log);
}, 3000);
