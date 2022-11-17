// var userInput = document.getElementById("city-search");
// var userForm = document.getElementById("form-sbt");
let userInput = $("#city-search");
let userForm = $("#form-sbt");
let lat = "";
let lon = "";
let city = "";
let myKey = "";
let date = "";
let temp = "";
let wind = "";
let humidity = "";
let prevbtn = "";
let icon = "";
let iconUrl = "";

userForm.on("click", function () {
  let userSearch = userInput.val();
  myKey = "402ec6a1b913f7427fae9503e9a1a985";
  let cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&appid=${myKey}`;
  $.ajax({
    url: cityUrl,
  })
    .then(function (response) {
      lon = response[0].lon;
      lat = response[0].lat;
    })
    .then(function () {
      let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${myKey}`;
      $.ajax({
        url: weatherUrl,
      }).then(function (response) {
        console.log(response);
        //todays forecast
        date = dayjs().format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        console.log(city);
        icon = response.list[0].weather[0].icon;
        console.log(icon);
        iconUrl = "http://openweathermap.org/img/wn" + icon + ".png";
        temp = response.list[0].main.temp_max;
        wind = response.list[0].wind.speed;
        humidity = response.list[0].main.humidity;
        //day 1
        date = dayjs().format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        console.log(city);
        icon = response.list[0].weather[0].icon;
        console.log(icon);
        iconUrl = "http://openweathermap.org/img/wn" + icon + ".png";
        temp = response.list[0].main.temp_max;
        wind = response.list[0].wind.speed;
        humidity = response.list[0].main.humidity;
        //day 2
        date = dayjs().format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        console.log(city);
        icon = response.list[0].weather[0].icon;
        console.log(icon);
        iconUrl = "http://openweathermap.org/img/wn" + icon + ".png";
        temp = response.list[0].main.temp_max;
        wind = response.list[0].wind.speed;
        humidity = response.list[0].main.humidity;
        //day 3
        date = dayjs().format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        console.log(city);
        icon = response.list[0].weather[0].icon;
        console.log(icon);
        iconUrl = "http://openweathermap.org/img/wn" + icon + ".png";
        temp = response.list[0].main.temp_max;
        wind = response.list[0].wind.speed;
        humidity = response.list[0].main.humidity;
        //day 4
        date = dayjs().format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        console.log(city);
        icon = response.list[0].weather[0].icon;
        console.log(icon);
        iconUrl = "http://openweathermap.org/img/wn" + icon + ".png";
        temp = response.list[0].main.temp_max;
        wind = response.list[0].wind.speed;
        humidity = response.list[0].main.humidity;
        //day 5
        date = dayjs().format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        console.log(city);
        icon = response.list[0].weather[0].icon;
        console.log(icon);
        iconUrl = "http://openweathermap.org/img/wn" + icon + ".png";
        temp = response.list[0].main.temp_max;
        wind = response.list[0].wind.speed;
        humidity = response.list[0].main.humidity;
      });
    });
});
