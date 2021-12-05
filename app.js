var amount1 = document.getElementById('amount1');
var amount2 = document.getElementById('amount2');
var amount3 = document.getElementById('amount3');
var amount4 = document.getElementById('amount4');
var amount5 = document.getElementById('amount5');
var amount6 = document.getElementById('amount6');
var amount7 = document.getElementById('amount7');
var total = document.getElementById('total');

var a = document.getElementById('a');
function increment1() {
    a.value = parseInt(a.value) + 1;
    amount1.innerHTML = a.value * 350;
}

function decrement1() {
    if (a.value <= 0) {
        a.value = 0;
    } else
        a.value = parseInt(a.value) - 1;
    amount1.innerHTML = a.value * 350;
    total.innerHTML = amount1.innerHTML;
}







var b = document.getElementById('b');

function increment2() {
    b.value = parseInt(b.value) + 1;
    amount2.innerHTML = b.value * 200;
    total.innerHTML = parseInt(total.innerHTML) + parseInt(amount2.innerHTML);
}

function decrement2() {
    if (b.value <= 0) {
        b.value = 0;
    } else
        b.value = parseInt(b.value) - 1;
    amount2.innerHTML = b.value * 200;
}

var c = document.getElementById('c');

function increment3() {
    c.value = parseInt(c.value) + 1;
    amount3.innerHTML = c.value * 1250;
}

function decrement3() {
    if (c.value <= 0) {
        c.value = 0;
    } else
        c.value = parseInt(c.value) - 1;
    amount3.innerHTML = c.value * 1250;
}


var d = document.getElementById('d');

function increment4() {
    d.value = parseInt(d.value) + 1;
    amount4.innerHTML = d.value * 150;
}

function decrement4() {
    if (d.value <= 0) {
        d.value = 0;
    } else
        d.value = parseInt(d.value) - 1;
    amount4.innerHTML = d.value * 150;
}
var e = document.getElementById('e');

function increment5() {
    e.value = parseInt(e.value) + 1;
    amount5.innerHTML = e.value * 80;
}

function decrement5() {
    if (e.value <= 0) {
        e.value = 0;
    } else
        e.value = parseInt(e.value) - 1;
    amount5.innerHTML = e.value * 80;
}
var f = document.getElementById('f');

function increment6() {
    f.value = parseInt(f.value) + 1;
    amount6.innerHTML = f.value * 110;
}

function decrement6() {
    if (f.value <= 0) {
        f.value = 0;
    } else
        f.value = parseInt(f.value) - 1;
    amount6.innerHTML = f.value * 110;
}
var g = document.getElementById('g');

function increment7() {
    g.value = parseInt(g.value) + 1;
    amount7.innerHTML = g.value * 250;
}

function decrement7() {
    if (g.value <= 0) {
        g.value = 0;
    } else
        g.value = parseInt(g.value) - 1;
    amount7.innerHTML = g.value * 250;
}


function bill() {
    total.innerHTML = (parseInt(amount1.innerHTML) + parseInt(amount2.innerHTML) + parseInt(amount3.innerHTML) + parseInt(amount4.innerHTML) + parseInt(amount5.innerHTML) + parseInt(amount6.innerHTML) + parseInt(amount7.innerHTML))
}

