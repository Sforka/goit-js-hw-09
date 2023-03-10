import { Notify } from "notiflix";

const refs = {
  form: document.querySelector('.form'),
  btnSubmit: document.querySelector('.form button'),
  inputDelay: document.querySelector('.form input[name="delay"]'),
  inputStep: document.querySelector('.form input[name="step"]'),
  inputAmount: document.querySelector('.form input[name="amount"]'),
};

refs.btnSubmit.addEventListener('click', onSubmitClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmitClick(e) {
  e.preventDefault();
  let delay = Number(refs.inputDelay.value);
  let step = Number(refs.inputStep.value);
  let amount = Number(refs.inputAmount.value);
  console.log(step);

  if ((refs.inputDelay.value < 0 || refs.inputStep.value < 0 || refs.inputAmount.value < 0)) {
    return Notify.warning('Please enter correct data');
  }
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  delay += step;
  }
}