const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
];

const weekdays = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi'
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

// avoir toujours +10 jours
const futurDate = new Date(tempYear, tempMonth, tempDay + 10, 9, 0, 0);

const year = futurDate.getFullYear();
const month = months[futurDate.getMonth()];
const date = futurDate.getDate();
const weekday = weekdays[futurDate.getDay()];
const hours = futurDate.getHours();
const mins = futurDate.getMinutes();

giveaway.textContent = `l'offre se termine le ${weekday} ${date} ${month} ${year} ${
  hours < 10 ? `0${hours}` : hours
}h${mins < 10 ? `0${mins}` : mins}`;

// temps futur en ms
const futurTime = futurDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futurTime - today;

  // valeurs en ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calcule les valeurs
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  //  défini les valeurs dans un taleau
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = "<h4 class='expired'>désolé, l'offre a expiré</h4>";
  }
}

// compte à rebours
const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
