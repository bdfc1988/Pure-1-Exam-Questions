var slider_img = document.querySelector('.slider-img');
var images = ['Quadratics 1.PNG', 'Quadratics 2.PNG', 'Quadratics 3.PNG','Quadratics 4.PNG', 'Quadratics 5.PNG', 'Quadratics 6.PNG', 'Quadratics 7.PNG'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i>= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', ''+images[i]);
}