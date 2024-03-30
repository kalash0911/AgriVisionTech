
const burger = document.querySelector('.burger');
const linkClose = document.querySelectorAll('.link-close');
const overflow = document.querySelector('.overflow');

burger?.addEventListener('click', function () {
    document.body.classList.toggle('body_lock');
    document.body.classList.toggle('active');
});

overflow?.addEventListener('click', function () {
    document.body.classList.toggle('body_lock');
    document.body.classList.toggle('active');
});

for (let i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener('click', function () {
    document.body.classList.remove('body_lock');
    document.body.classList.remove('active');
    });
}

const searchBtn = document.querySelector('.search-btn');
const searchFile = document.querySelector('.search-file');
const overflowBlur = document.querySelector('.overflow-blur');

searchBtn?.addEventListener('click', function () {
    searchFile.classList.add('active');
    overflowBlur.classList.add('active');
    document.body.classList.add('body_lock');
});

overflowBlur?.addEventListener('click', function () {
    searchFile.classList.remove('active');
    overflowBlur.classList.remove('active');
    document.body.classList.remove('body_lock');
});