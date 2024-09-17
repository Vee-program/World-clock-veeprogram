function updateTime() {
  let pretoraCityElement = document.querySelector("#pretoria");
  let pretoraTimeElement = pretoraCityElement.querySelector(".time");
  let pretoraDateElement = pretoraCityElement.querySelector(".date");

  pretoraDateElement.innerHTML = moment().format("MMMM Do YYYY");
  pretoraTimeElement.innerHTML = moment()
    .tz("Africa/Pretoria")
    .format("h:mm:ss [<small>]A[</small>]");

  let mumbaiCityElement = document.querySelector("#mumbai");
  let mumbaiTimeElement = mumbaiCityElement.querySelector(".time");
  let mumbaiDateElement = mumbaiCityElement.querySelector(".date");

  mumbaiTimeElement.innerHTML = moment()
    .tz("Asia/Mumbai")
    .format("h:mm:ss [<small>]A[</small>]");
  mumbaiDateElement.innerHTML = moment().format("MMMM Do YYYY");
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
  citiesContainer.innerHTML = `<div class="city" id="pretoria">
          <h2 class="pretoria">${cityZone}</h2>
          <span class="date">${dateElement.format("MMMM Do YYYY")}</span>
          <span class="time">${timeZone.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</span>
          <hr />
        </div>`;
  alert(timeZone);
}
let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", updateCityTimeZone);
