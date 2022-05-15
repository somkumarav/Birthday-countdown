const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const text = document.querySelector('.gift-info h4');
const values = document.querySelectorAll('.deadline-format h4');
const deadline = document.querySelector('.deadline');
const textMessage = document.querySelector('.expired');

let dateOfBith = new Date(2022, 4, 30, 0, 0, 0);

let year = dateOfBith.getFullYear();
let day = weekdays[dateOfBith.getDay()];

const oneSecond = 1000;
const oneMinute = 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneDay = 24 * 60 * 60 * 1000;

text.innerHTML = `<h4 class="giveaway">${day}, 30th May ${year}</h4>`;

function setTime() {
  const today = new Date().getTime();
  let timeRemaining = dateOfBith.getTime() - today;

  let daysLeft = Math.floor(timeRemaining / oneDay);
  let hoursLeft = Math.floor((timeRemaining % oneDay) / oneHour);
  let minutesLeft = Math.floor((timeRemaining % oneHour) / oneMinute);
  let secondsleft = Math.floor((timeRemaining % oneMinute) / oneSecond);

  let display = [daysLeft, hoursLeft, minutesLeft, secondsleft];

  function format(value) {
    if (value < 10) return `0${value}`;
    return value;
  }

  values.forEach(function (value, index) {
    value.textContent = format(display[index]);
  });

  if (timeRemaining < 0) {
    deadline.classList.add('hidden');
    textMessage.classList.remove('hidden');
    dateOfBith.setFullYear(parseInt(dateOfBith.getFullYear()) + 1);
    setTimeout(function () {
      deadline.classList.remove('hidden');
      textMessage.classList.add('hidden');
      console.log(dateOfBith);
    }, 0);
  }
}

setInterval(setTime, 1000);
setTime();
