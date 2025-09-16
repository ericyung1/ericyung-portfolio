let stars = document.getElementById('stars');
let castle_background = document.getElementById('castle_background');
let mountain_foreground = document.getElementById('mountain_foreground');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let dragon = document.getElementById('dragon');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    dragon.style.top = value * -1.25 + 'px';
    castle_background.style.top = value * 0.75 + 'px';
    mountain_foreground.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
})