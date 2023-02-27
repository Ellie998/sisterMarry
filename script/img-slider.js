function changeImgBack(){
    if(countImg === 0){
      countImg = 11;
      changeImg();
      return;
    } 
  countImg--;
  changeImg();
}


function changeImgNext(){
  if(countImg === 11){
    countImg = 0;
    changeImg();
    return;
  }
  countImg++;
  changeImg();
}

function changeImg(){
  for(let i = 0; i < 12; i++){
    sliderElement.children[i].classList.remove('clicked');
  }
  sliderElement.children[countImg].classList.add('clicked');

  imgElement.attributes[0].value = './images/' + countImg + '.jpeg';
}

function changeImgSlider(event){
  const listElement = event.target;
  if(listElement.nodeName == 'OI'){
    return;
  }
  countImg = listElement.dataset.sliderNum;
  changeImg();
}

function imgModal(){
  modalBackgroundElement.classList.add('modal');
  imgElement.classList.add('modal');
}

function backgroundModal(){
  modalBackgroundElement.classList.remove('modal');
  imgElement.classList.remove('modal');

}