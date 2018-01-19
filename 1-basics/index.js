const inputEl = document.getElementById('text');
const statusEl = document.getElementById('status');

const value$ = Rx.Observable.fromEvent(inputEl, 'keyup').map(event => event.target.value);
const startSave$ = value$.debounceTime(1000).distinctUntilChanged();

const saveRequest$ = startSave$.switchMap(data =>
    Rx.Observable.timer(1000)
        .mapTo(data)
        .takeUntil(value$),
);

const isSaved$ = Rx.Observable.combineLatest(
    value$,
    startSave$.startWith(null),
    saveRequest$.startWith(null),
)
    .map(([value, started, saved]) => {
        if (value === saved) return 2;
        if (value === started) return 1;
        return 0;
    })
    .distinctUntilChanged();

isSaved$.subscribe(status => {
    statusEl.innerText = ['✘', '…', '✔'][status];
});

saveRequest$.subscribe(data => {
    console.log('!!! Save request - ', data);
});
