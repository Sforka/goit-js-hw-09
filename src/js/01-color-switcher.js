const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', changeStart());
btnStop.addEventListener('click', changeStop());

function changeStart() {
  const changeColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
}

function changeStop() { 
  clearTimeout(changeColor)
  btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}