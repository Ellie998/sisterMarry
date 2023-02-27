let countImg = 0;

let countElement = document.querySelector('#count');

const backBtnElement = document.getElementById('btn-back');
const nextBtnElement = document.getElementById('btn-next');
const imgElement = document.getElementById('img');

const sliderElement = document.querySelector('#slider ol');

backBtnElement.addEventListener('click',changeImgBack);
nextBtnElement.addEventListener('click',changeImgNext);
sliderElement.addEventListener('click',changeImgSlider);
