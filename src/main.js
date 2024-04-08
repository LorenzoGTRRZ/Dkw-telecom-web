AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__aba--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabmenu__list--is-active');
        })
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabmenu__list--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__aba--is-active');
    }
}

let button = document.getElementById("button");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});

document.addEventListener("DOMContentLoaded", function() {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let sliderDom = carouselDom.querySelector('.carousel__list');
    let timeRunning = 3000;
    let timeAutoNext = 7000;


    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    nextDom.onclick = function() {
        showSlider('next');
    };

    prevDom.onclick = function() {
        showSlider('prev');
    };

    function showSlider(type) {
        let sliderItemsDom = sliderDom.querySelectorAll('.carousel__list__item');

        if (type === 'next') {
            sliderDom.appendChild(sliderItemsDom[0]);;
            carouselDom.classList.add('next');
        } else {
            sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }
});




