const secondHand = document.querySelector("#second-hand");
const minuteHand = document.querySelector("#minute-hand");
const hourHand = document.querySelector("#hour-hand");
function clock() {
  const now = new Date();
  const sec = now.getSeconds();
  const secDeg = (sec / 60) * 360 - 90;
  secondHand.style.transform = `rotate(${secDeg}deg)`;
  // min
  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 - 90;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  //hour
  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 - 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  if (sec == 1) {
    secondHand.classList.add("transition");
  } else if (sec == 0) {
    secondHand.classList.remove("transition");
  } else {
    return;
  }
}
setInterval(clock, 1000);
