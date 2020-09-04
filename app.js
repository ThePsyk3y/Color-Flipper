const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#ff00ff', '#ffff00', '#4a505d', '#690420'];
const btn = document.getElementById('color-changer');
const colortxt = document.getElementById('color');
let prevRand;

function getRandomNumber() {
  let currRand;
  // * To make sure no color is displayed more than once at a time
  for (;;) {
    currRand = Math.floor(Math.random() * colors.length);
    if (prevRand === currRand);
    else {
      prevRand = currRand;
      break;
    }
  }

  return currRand;
}

// *Button EventListener
btn.addEventListener('click', () => {
  const randNum = getRandomNumber();
  document.body.style.backgroundColor = colors[randNum];
  colortxt.textContent = colors[randNum];
});
