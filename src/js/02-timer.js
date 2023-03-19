// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const todayTime = Date.now();

const refs = {
    btnStartEl: document.querySelector("[data-start]"),
    spanDays: document.querySelector("[data-days]"),
    spanHours: document.querySelector("[data-hours]"),
    spanMinutes: document.querySelector("[data-minutes]"),
    spanSeconds: document.querySelector("[data-seconds]"),
};


addedDisableAttribute(refs.btnStartEl);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);

      if (selectedDates[0] <= todayTime) {
          Notify.info("Please choose a date in the future");
          addedDisableAttribute(refs.btnStartEl);
      } else {
          removeDisableAttribute(refs.btnStartEl);
               
          refs.btnStartEl.addEventListener("click", handleTimesValue);

          function handleTimesValue() {
              addedDisableAttribute(refs.btnStartEl);

               setInterval(() => {
                  const timeNow = Date.now();

                  const currentTime = convertMs(selectedDates[0] - timeNow);
                
                  if (timeNow <= selectedDates[0]) {
                      refs.spanDays.textContent = currentTime.days;
                  refs.spanHours.textContent = currentTime.hours;
                  refs.spanMinutes.textContent = currentTime.minutes;
                  refs.spanSeconds.textContent = currentTime.seconds;
                  } else {
                      return 
                   };
              }, 1000);
          };
      };
    },
};
function addedDisableAttribute(element) {
    element.setAttribute("disabled", true);
};

function removeDisableAttribute(element) {
    element.removeAttribute("disabled");
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
   return value.toString().padStart(2, "0"); 
}

flatpickr("#datetime-picker", options);

