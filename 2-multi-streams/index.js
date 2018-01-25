const colorEl = document.getElementById('color');
const scaleEl = document.getElementById('scale');
const widthEl = document.getElementById('width');
const heightEl = document.getElementById('height');

const outputEl = document.getElementById('output');

const color$ = Rx.Observable.fromEvent(colorEl, 'input')
    .map(event => event.target.value)
    .startWith(colorEl.value);
const scale$ = Rx.Observable.fromEvent(scaleEl, 'input')
    .map(event => event.target.value)
    .startWith(scaleEl.value);

const width$ = Rx.Observable.fromEvent(widthEl, 'input')
    .map(event => event.target.value)
    .startWith(widthEl.value);
const height$ = Rx.Observable.fromEvent(heightEl, 'input')
    .map(event => event.target.value)
    .startWith(heightEl.value);

const size$ = scale$.combineLatest(width$, height$).map(([scale, width, height]) => ({
    width: width * scale,
    height: height * scale,
}));

Rx.Observable.combineLatest(color$, scale$, size$)
    .map(([color, scale, size]) => ({ color, scale, ...size }))
    .subscribe(data => {
        outputEl.style.width = data.width + 'px';
        outputEl.style.height = data.height + 'px';
        outputEl.style.backgroundColor = data.color;
    });
