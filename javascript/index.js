function updateCities() {
  const dateCityOne = document.querySelector("#date-city-one");
  const timeCityOne = document.querySelector("#time-city-one");
  dateCityOne.innerHTML = moment().tz("Europe/Madrid").format("MMMM Do YYYY");
  timeCityOne.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("h:mm:ss [<small>]a[</small>]");

  const dateCityTwo = document.querySelector("#date-city-two");
  const timeCityTwo = document.querySelector("#time-city-two");
  dateCityTwo.innerHTML = moment().tz("America/Lima").format("MMMM Do YYYY");
  timeCityTwo.innerHTML = moment()
    .tz("America/Lima")
    .format("h:mm:ss [<small>]a[</small>]");
}

updateCities();
setInterval(updateCities, 100);
