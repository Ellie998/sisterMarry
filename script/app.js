let countImg = 0;

let countElement = document.querySelector('#count');

const backBtnElement = document.getElementById('btn-back');
const nextBtnElement = document.getElementById('btn-next');
const imgElement = document.getElementById('img');
const modalBackgroundElement = document.getElementById('modal-background');

const sliderElement = document.querySelector('#slider ol');

backBtnElement.addEventListener('click',changeImgBack);
nextBtnElement.addEventListener('click',changeImgNext);
sliderElement.addEventListener('click',changeImgSlider);
imgElement.addEventListener('click',imgModal);
modalBackgroundElement.addEventListener('click',backgroundModal);
