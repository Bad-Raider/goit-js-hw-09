import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector("form"),
  inputDelayEl: document.getElementsByName("delay")[0],
  inputStepEl: document.getElementsByName("step")[0],
  inputAmountEl: document.getElementsByName("amount")[0],
  btnSubmitEL: document.querySelector("button"),
}


refs.formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {

  e.preventDefault();

  const objVAlue = {
    delay: Number(refs.inputDelayEl.value),
    step: Number(refs.inputStepEl.value),
    amount: Number(refs.inputAmountEl.value),
  };

    let counter = objVAlue.delay; 

  for (let i = 0; i < objVAlue.amount; i++){
  
    counter += objVAlue.step;
     console.log(counter)
    createPromise((i + 1), (counter - objVAlue.step))
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  };
}

function createPromise(position, delay) {
  
     return new Promise((resolve, reject) => {
      
       setInterval(() => {
        let shouldResolve = Math.random() > 0.3;
      
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      };
       }, delay);
    });
}

