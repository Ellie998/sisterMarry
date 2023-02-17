let countElement = document.querySelector('#count');
countElement.innerText = Date();

function changePara(event){
  countElement.innerText = Date();
  console.log('cilcked!');
  console.log(Date());
  console.dir(countElement);
}

countElement.addEventListener('click',changePara);

// 현재 시간 실시간으로 보이도록 하기
// D-day 계산하기
// D-day counter로 변경하기
