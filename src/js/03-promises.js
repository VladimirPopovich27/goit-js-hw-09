import Notiflix from 'notiflix';

Notiflix.Notify.init({
  timeout: 4000,
  clickToClose: true,
});

const rfs = {
  inputDelayEl: document.querySelector('[name="delay"]'),
  inputStepEl: document.querySelector('[name="step"]'),
  inputAmountEl: document.querySelector('[name="amount"]'),
  btnSubmitEl: document.querySelector('button'),
};

// rfs.inputDelayEl.addEventListener('input', onDelayInputHandler);
// rfs.inputStepEl.addEventListener('input', onStepInputHandler);
// rfs.inputAmountEl.addEventListener('input', onAmountInputHandler);
rfs.btnSubmitEl.addEventListener('click', onSubmitClickHandler);

// function onDelayInputHandler() {
//   console.log(rfs.inputDelayEl.value);
// }

// function onStepInputHandler() {
//   console.log(rfs.inputStepEl.value);
// }

// function onAmountInputHandler() {
//   console.log(rfs.inputAmountEl.value);
// }

function onSubmitClickHandler(e) {
  e.preventDefault();

  const tempValue = promiseArrayMaker(
    rfs.inputAmountEl.value,
    rfs.inputDelayEl.value,
    rfs.inputStepEl.value
  );

  promiseArrayHandler(tempValue);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // эта функция на +
        resolve(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      } else {
        // эта функция на -
        reject(new Error(`❌ Rejected promise ${position + 1} in ${delay}ms`));
      }
    }, delay);
  });
}

function promiseArrayMaker(amount, delay, step) {
  const array = [];
  delay = Number(delay);
  step = Number(step);

  for (let i = 0; i < amount; i++) {
    array.push(createPromise(i, delay));
    delay += step;
  }

  return array;
}

function promiseArrayHandler(array) {
  array.map(el =>
    el
      .then(value => Notiflix.Notify.success(value))
      .catch(error => Notiflix.Notify.failure(error.message))
  );
}

// const p = new Promise((resolve, reject) => reject(new Error('сори, холостой пиу')));
// const p = new Promise((yes, reject) => yes('дырка в мишени'));
// p.then(v => console.log(v)).catch(e => console.log(e.message));
// console.log('obj', p);
