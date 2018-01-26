const circleEl = document.getElementById('circle');
const circle2El = document.getElementById('circle2');

const mousedown$ = Rx.Observable.fromEvent(circleEl, 'mousedown');
const mousemove$ = Rx.Observable.fromEvent(document, 'mousemove');
const mouseup$ = Rx.Observable.fromEvent(document, 'mouseup');

const mousedrag$ = mousedown$.switchMap(md =>
    mousemove$
        .map(mm => ({
            left: mm.clientX,
            top: mm.clientY,
        }))
        .takeUntil(mouseup$),
);

mousedrag$.subscribe(pos => {
    circleEl.style.top = pos.top + 'px';
    circleEl.style.left = pos.left + 'px';
});

mousedrag$
    .delay(100)
    .map(pos => ({ left: pos.left + 50, top: pos.top }))
    .subscribe(pos => {
        circle2El.style.top = pos.top + 'px';
        circle2El.style.left = pos.left + 'px';
    });
