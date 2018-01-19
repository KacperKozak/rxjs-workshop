const dragTargetEl = document.getElementById('dragTarget');

// Get the three major events
const mousedown$ = Rx.Observable.fromEvent(dragTargetEl, 'mousedown');
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

mousedrag$.subscribe(function(pos) {
    dragTargetEl.style.top = pos.top + 'px';
    dragTargetEl.style.left = pos.left + 'px';
});
