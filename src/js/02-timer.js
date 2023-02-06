import flatpickr from 'flatpickr';
import notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';


const refs = {
  timer: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
var selectedTime = new Date()
refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    const time = selectedDates[0].getTime() - new Date().getTime();
    if (time <= 0) {
       selectedDates = new Date();
      window.alert('Please choose a date in the future');
      return;
    }
    selectedTime = selectedDates[0];
    refs.btnStart.disabled = false;
    return time
  }
};
flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

class Timer {
  constructor() {
    this.timerId = null;
    this.isActive = false;
  }

  startTimer() {
    if (this.isActive) {
      return;
    }
    refs.btnStart.disabled = true;
    this.isActive = true;
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const delta = selectedTime - currentTime;
      const components = convertMs(delta);
      this.updateTime(components);
      if (delta <= 1000) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    if (!this.isActive) {
      return;
    }
    this.isActive = false;
    clearInterval(this.timerId);
  }

  updateTime({ days, hours, minutes, seconds }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }
}
const timer = new Timer();
refs.btnStart.addEventListener('click', ()=> timer.startTimer())