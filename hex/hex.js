const hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('color-changer');
const colortxt = document.getElementById('color');

function getRandomNumber() {
  return Math.floor(Math.random() * hexVal.length);
}

btn.addEventListener('click', () => {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hexVal[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  colortxt.textContent = hexColor;
});
