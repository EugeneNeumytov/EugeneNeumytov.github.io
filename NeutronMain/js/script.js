let slideText = 0;
let dots = document.querySelectorAll('.dot');
let texts = document.querySelectorAll('.first-block-text');

slide(slideText);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        removeActive();
        slide(i);
    })
}

function removeActive() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active');
        texts[i].style.display = 'none';
    }
}

function slide(n) {
    dots[n].classList.add('dot-active');
    texts[n].style.display = 'block';
}