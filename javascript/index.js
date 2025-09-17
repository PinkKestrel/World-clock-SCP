// Default selection
let selectedCityTimezone = "Europe/London";

function updateTimezones() {
  updateLocalTimezone();
  updateSelectedCityTimezone();
}

function updateLocalTimezone() {
  const guestLocalZone = moment.tz.guess();
  const cityOne = document.getElementById("city-one");
  const dateCityOne = document.getElementById("date-city-one");
  const timeCityOne = document.getElementById("time-city-one");

  cityOne.textContent = getCityFromTimezone(guestLocalZone);
  dateCityOne.textContent = moment().format("MMMM Do YYYY");
  timeCityOne.innerHTML = moment().format("h:mm:ss [<small>]a[</small>]");
}

function updateSelectedCityTimezone() {
  const cityTwo = document.getElementById("city-two");
  const dateCityTwo = document.getElementById("date-city-two");
  const timeCityTwo = document.getElementById("time-city-two");
  cityTwo.textContent = getCityFromTimezone(selectedCityTimezone);
  dateCityTwo.textContent = moment()
    .tz(selectedCityTimezone)
    .format("MMMM Do YYYY");
  timeCityTwo.innerHTML = moment()
    .tz(selectedCityTimezone)
    .format("h:mm:ss [<small>]a[</small>]");
}

function onSelectedCityChange(event) {
  selectedCityTimezone = event.target.value;
  updateSelectedCityTimezone();
}

function getCityFromTimezone(timezone) {
  // Europe/London --> split('/') --> ['Europe', 'London']
  return timezone.split("/")[1];
}

setInterval(updateTimezones, 1000);
updateTimezones();

const selectCity = document.getElementById("selectCity");
selectCity.addEventListener("change", onSelectedCityChange);
