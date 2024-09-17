function updateTime() {
  let johannesburgCityElement = document.querySelector("#johannesburg");
  let johannesburgTimeElement = johannesburgCityElement.querySelector(".time");
  let johannesburgDateElement = johannesburgCityElement.querySelector(".date");

  johannesburgDateElement.innerHTML = moment().format("MMMM Do YYYY");
  johannesburgTimeElement.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("h:mm:ss [<small>]A[</small>]");

  let singaporeCityElement = document.querySelector("#singapore");
  let singaporeTimeElement = singaporeCityElement.querySelector(".time");
  let singaporeDateElement = singaporeCityElement.querySelector(".date");

  singaporeTimeElement.innerHTML = moment()
    .tz("Asia/Singapore")
    .format("h:mm:ss [<small>]A[</small>]");
  singaporeDateElement.innerHTML = moment().format("MMMM Do YYYY");
}
setInterval(updateTime, 100);

function updateCityTimeZone(event) {
  let cityTimeZone = event.target.value;
  let cityZone = event.target.value.replace("_", " ").split("/")[1];
  let timeZone = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let dateElement = moment().tz(`${event.target.value}`).format("MMMM Do YYYY");

  let citiesContainer = document.querySelector(".cities-container");
  citiesContainer.innerHTML = `<div class="city" id="johannesburg">
          <h2 class="johannesburg">${cityZone}</h2>
          <span class="date">${dateElement}</span>
          <span class="time">${timeZone}</span>
          <hr />
        </div>`;
  alert(cityTimeZone);
}
let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCityTimeZone);
