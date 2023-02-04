const refs = {
    btnStart: document.querySelector('data-start'),
    btnStop: document.querySelector('data-stop'),
    background: document.querySelector(body),
    
}
const RandomColor = getRandomHexColor()


refs.btnStart.addEventListener('click', changeStart())

refs.btnStop.addEventListener('click', changeStop())


function changeStart() { 
  console.log('start');
  const changeColor = setTimeout((background.backgroundColor = RandomColor),1000)
}

function changeStop() { 
clearTimeout(changeColor)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}