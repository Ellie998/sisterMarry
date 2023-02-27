function changePara(event){
  countElement.innerText = Date();
  console.log('cilcked!');
  console.log(Date());
  console.dir(countElement);
}

function diffDay(){
  const masTime = new Date("2023-04-23 12:00");
  const todayTime = new Date();
  
  const diff = masTime - todayTime;
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const diffMin = Math.floor(diff / (1000 * 60)) % 60;
  const diffSec = Math.floor(diff / (1000)) % 60;

  const result = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초 남았습니다.`;

  countElement.textContent = result;
}

diffDay();
setInterval(diffDay, 1000);