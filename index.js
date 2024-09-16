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
