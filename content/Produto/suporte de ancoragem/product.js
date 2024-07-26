const image = document.getElementById('productImg');
const btn = document.getElementsByClassName('main-wrap__product__image-gallery__controls__btn');

btn[0].addEventListener('click', function(){
    image.src = '../../dist/images/0-removebg-preview.png';
    for( bt of btn){
        bt.classList.remove('main-wrap__product__image-gallery__controls__btn--is-active');
    }
    this.classList.add('main-wrap__product__image-gallery__controls__btn--is-active');
});

