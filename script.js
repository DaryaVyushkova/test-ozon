let progressBar = document.querySelector('.circular-progress');
const inputPercent = document.querySelector('.percent')
const animationButton = document.querySelector('.animation')
const hiddenButton = document.querySelector('.hidden')
let status = 'normal'


function setStatus(element, newStatus){
  if(Array.from(element.classList).includes('switch-on')){
    element.className = 'switch-btn'
    status = 'normal'
  } else {
    element.classList.add('switch-on')
    status = newStatus
  }
}

function start (progressEndValue = 100, progressValue = 0, speed = 50) {
  let progress = setInterval(() => {
    progressValue++;
    progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #d1d3e1d6 ${progressValue * 3.6}deg
  )`;
    if (progressValue >= progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

function stop(){
  progressBar.style.background = `#d1d3e1d6`
}


animationButton.addEventListener('click', () => {
  setStatus(animationButton, 'animated')
  status === 'animated' ? start() : stop()
})

hiddenButton.addEventListener('click', () => {
  setStatus(hiddenButton, 'hidden')
  status === 'hidden' ? progressBar.classList.add('none') : progressBar.className = 'circular-progress'
})

inputPercent.addEventListener('change', ()=>{
  start(inputPercent.value)
})

