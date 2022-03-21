let buttons = document.querySelectorAll('.text-blocks__button');

for (let button of buttons) {
    button.addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('text-blocks__button--rotate');
        event.currentTarget.parentNode.nextElementSibling.classList.toggle('text-blocks__text--hidden');
    })
}