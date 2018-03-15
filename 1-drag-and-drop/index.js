const circleEl = document.getElementById("circle");
const circle2El = document.getElementById("circle2");

const mousedown$ = Rx.Observable.fromEvent(circleEl, "mousedown");
const mousemove$ = Rx.Observable.fromEvent(document, "mousemove");
const mouseup$ = Rx.Observable.fromEvent(document, "mouseup");
