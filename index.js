const modal = document.querySelector('.modal');

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const back = document.querySelector('.modal__content--close');

btn1.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

btn2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

btn3.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
});

back.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});
