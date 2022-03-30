let buttons = document.querySelectorAll('.text-blocks__button');

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('text-blocks__button--rotate');
        event.currentTarget.parentNode.nextElementSibling.classList.toggle('text-blocks__text--hidden');
    })
}

let burger = document.querySelector('.burger')
burger.addEventListener('click', function (event) {
    event.currentTarget.nextElementSibling.classList.toggle('nav__disabled');
    document.querySelector('.sections-list').classList.toggle('disabled');
    document.getElementsByTagName('body')[0].classList.toggle('disabled-scroll');
})

let close = document.querySelector('.close')
close.addEventListener('click', function (event) {
    event.currentTarget.parentNode.parentNode.classList.toggle('nav__disabled');
    document.querySelector('.sections-list').classList.toggle('disabled');
    document.getElementsByTagName('body')[0].classList.toggle('disabled-scroll');
})

let burger_links = document.querySelectorAll('.nav__link--burger')
for (let burger_link of burger_links) {
    burger_link.addEventListener('click', function (event) {
        document.querySelector('.nav__burger-menu').classList.toggle('nav__disabled');
        document.querySelector('.sections-list').classList.toggle('disabled');
        document.getElementsByTagName('body')[0].classList.toggle('disabled-scroll');
    })
}