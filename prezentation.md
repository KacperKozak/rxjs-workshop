# Introduction

## Like arrays

```
[1,2,3,4,5]
--1---2-3---4--5-->
```

## Like promises

```js
const myPromise = Promise.resolve('Hello');
myPromise.then(value => …); // Hello

const stream$ = Rx.Observable.of('Hello');
stream$.subscribe(value => …); // Hello

const fromPromise$ = Rx.Observable.fromPromise(myPromise);
```

## Like functions

```js
const stream$ = Rx.Observable.of('Hello');

stream$.subscribe(value => …); // Hello

setTimeout(() => {
    stream$.subscribe(value => …); // Hello
}, 1000);
```

## Streams

```js
const stream$ = Rx.Observable.interval(1000);

stream$.subscribe(value => …); // 0 (1s) 1 (1s) 2 …
```

```js
const stream$ = Rx.Observable.interval(1000)
    .map(n => n * 5)
    .filter(n => Math.sin(n) >= 0);

stream$.subscribe(value => …); // 0 (1s) 1 (1s) 2 …
```
