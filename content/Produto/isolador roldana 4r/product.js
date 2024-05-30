const image = document.getElementById('productImg');
const btn = document.getElementsByClassName('main-wrap__product__image-gallery__controls__btn');

btn[0].addEventListener('click', function(){
    image.src = '../../../dist/images/ISOLADOR ROLDANA 4R (RANHURA) (2).png';
    for( bt of btn){
        bt.classList.remove('main-wrap__product__image-gallery__controls__btn--is-active');
    }
    this.classList.add('main-wrap__product__image-gallery__controls__btn--is-active');
});

btn[1].addEventListener('click', function(){
    image.src = '../../../dist/images/ISOLADOR ROLDANA 4R (RANHURA) (3).png';
    for( bt of btn){
        bt.classList.remove('main-wrap__product__image-gallery__controls__btn--is-active');
    }
    this.classList.add('main-wrap__product__image-gallery__controls__btn--is-active');
});

btn[2].addEventListener('click', function(){
    image.src = '../../../dist/images/ISOLADOR ROLDANA 4R (RANHURA) (4).png';
    for( bt of btn){
        bt.classList.remove('main-wrap__product__image-gallery__controls__btn--is-active');
    }
    this.classList.add('main-wrap__product__image-gallery__controls__btn--is-active');
});

btn[3].addEventListener('click', function(){
    image.src = '../../../dist/images/ISOLADOR ROLDANA 4R (RANHURA) (5).png';
    for( bt of btn){
        bt.classList.remove('main-wrap__product__image-gallery__controls__btn--is-active');
    }
    this.classList.add('main-wrap__product__image-gallery__controls__btn--is-active');
});

btn[4].addEventListener('click', function(){
    image.src = '../../../dist/images/ISOLADOR ROLDANA 4R (RANHURA) (6).png';
    for( bt of btn){
        bt.classList.remove('main-wrap__product__image-gallery__controls__btn--is-active');
    }
    this.classList.add('main-wrap__product__image-gallery__controls__btn--is-active');
});

btn[5].addEventListener('click', function(){
    image.src = '../../../dist/images/ISOLADOR ROLDANA 4R (RANHURA).png';
    for( bt of btn){
        bt.classList.remove('main-wrap__product__image-gallery__controls__btn--is-active');
    }
    this.classList.add('main-wrap__product__image-gallery__controls__btn--is-active');
});

