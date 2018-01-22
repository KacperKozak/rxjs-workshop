# Introduction

## Like functions

```js
const somefn = () => 'Hello';

somefn(); // Hello
somefn(); // Hello

const stream$ = Rx.Observable.of('Hello');

stream$.subscribe(value => …); // Hello
stream$.subscribe(value => …); // Hello
```

## Like promises

```js
const myPromise = new Promise(resolve => {
    setTimeout(() => { resolve('Hello') }, 1000)
});
myPromise.then(value => …); // Hello

const stream$ = Rx.Observable.of('Hello').delay(1000);
stream$.subscribe(value => …); // Hello

const fromPromise$ = Rx.Observable.fromPromise(myPromise);
```

## Like arrays

```js
const values = [1,2,3,4,5];

values
    .map(a => a * 3)
    .filter(a => a % 2 === 0) // [6, 12]


const stream$ = Rx.Observable.from([1,2,3,4,5]);

stream$
    .map(a => a * 3)
    .filter(a => a % 2 === 0)
    .subscribe(value => …); // executed twice with 6 and 12

```

## Streams

```js
const stream$ = Rx.Observable.interval(1000);

stream$.subscribe(value => …); // 0 (1s) 1 (1s) 2 …
```
