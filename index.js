function updateTime() {
  let johannesburgCityElement = document.querySelector("#johannesburg");
  if (johannesburgCityElement) {
    let johannesburgTimeElement =
      johannesburgCityElement.querySelector(".time");
    let johannesburgDateElement =
      johannesburgCityElement.querySelector(".date");

    johannesburgDateElement.innerHTML = moment().format("MMMM Do YYYY");
    johannesburgTimeElement.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let singaporeCityElement = document.querySelector("#singapore");
  if (singaporeCityElement) {
    let singaporeTimeElement = singaporeCityElement.querySelector(".time");
    let singaporeDateElement = singaporeCityElement.querySelector(".date");

    singaporeTimeElement.innerHTML = moment()
      .tz("Asia/Singapore")
      .format("h:mm:ss [<small>]A[</small>]");
    singaporeDateElement.innerHTML = moment().format("MMMM Do YYYY");
  }
}

function updateCityTimeZone(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "currrent") {
    cityTimeZone = moment.tz.guess();
  }

  let cityZone = event.target.value.replace("_", " ").split("/")[1];
  let timeZone = moment().tz(`${event.target.value}`);
  let dateElement = moment().tz(`${event.target.value}`).format("MMMM Do YYYY");

  let citiesContainer = document.querySelector(".cities-container");
  citiesContainer.innerHTML = `<div>
          <h2 class="citySelect">${cityZone}</h2>
          <span class="date">${dateElement}</span>
          <span class="time">${timeZone.format(
            "h:mm:ss"
          )} <small>${timeZone.format("A")}</small></span>
          <hr />
        </div>
        <a href="/">more cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCityTimeZone);
