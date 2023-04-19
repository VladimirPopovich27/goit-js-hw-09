const rfs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
  timerId: null,
  isStartButtonSwitchedOn: false,
};

function onStartButtonHandler() {
  if (!rfs.isStartButtonSwitchedOn) {
    console.log('on');
    rfs.btnStart.disabled = true;
    rfs.btnStop.disabled = false;
    rfs.isStartButtonSwitchedOn = true;
    rfs.timerId = setInterval(myBodyColor, 1000);
  }
}
function onStopButtonHandler() {
  if (rfs.isStartButtonSwitchedOn) {
    console.log('off');
    rfs.btnStart.disabled = false;
    rfs.btnStop.disabled = true;
    rfs.isStartButtonSwitchedOn = false;
    clearInterval(rfs.timerId);
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function myBodyColor() {
  rfs.bodyEl.style.backgroundColor = getRandomHexColor();
}

rfs.btnStop.disabled = true;
rfs.btnStart.addEventListener('click', onStartButtonHandler);
rfs.btnStop.addEventListener('click', onStopButtonHandler);
