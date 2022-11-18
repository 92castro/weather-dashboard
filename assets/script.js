//jquery syntax
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

//search button function
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
        icon = response.list[0].weather[0].icon;
        iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        console.log(icon);
        temp = response.list[0].main.temp_max;
        wind = response.list[0].wind.speed;
        humidity = response.list[0].main.humidity;
        prevbtn = $("<button>").text(city);
        prevbtn.addClass("button");
        $("#previous").append(prevbtn);
        $("#date0").text(city + " " + "(" + date + ")");
        $("#wicon0").attr("src", iconUrl);
        $("#temp0").text("Temp- " + temp + " F");
        $("#wind0").text("Wind Speed- " + wind + " MPH");
        $("#humidity0").text("Humidity- " + humidity + " %");
        //day 1
        date = dayjs().add(1, "day").format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        icon = response.list[7].weather[0].icon;
        iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        temp = response.list[7].main.temp_max;
        wind = response.list[7].wind.speed;
        humidity = response.list[7].main.humidity;
        $("#date1").text(city + " " + "(" + date + ")");
        $("#wicon1").attr("src", iconUrl);
        $("#temp1").text("Temp- " + temp + " F");
        $("#wind1").text("Wind Speed- " + wind + " MPH");
        $("#humidity1").text("Humidity- " + humidity + " %");
        //day 2
        date = dayjs().add(2, "day").format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        icon = response.list[15].weather[0].icon;
        iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        temp = response.list[15].main.temp_max;
        wind = response.list[15].wind.speed;
        humidity = response.list[15].main.humidity;
        $("#date2").text(city + " " + "(" + date + ")");
        $("#wicon2").attr("src", iconUrl);
        $("#temp2").text("Temp- " + temp + " F");
        $("#wind2").text("Wind Speed- " + wind + " MPH");
        $("#humidity2").text("Humidity- " + humidity + " %");
        //day 3
        date = dayjs().add(3, "day").format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        icon = response.list[23].weather[0].icon;
        iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        temp = response.list[23].main.temp_max;
        wind = response.list[23].wind.speed;
        humidity = response.list[23].main.humidity;
        $("#date3").text(city + " " + "(" + date + ")");
        $("#wicon3").attr("src", iconUrl);
        $("#temp3").text("Temp- " + temp + " F");
        $("#wind3").text("Wind Speed- " + wind + " MPH");
        $("#humidity3").text("Humidity- " + humidity + " %");
        //day 4
        date = dayjs().add(4, "day").format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        icon = response.list[31].weather[0].icon;
        iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        temp = response.list[31].main.temp_max;
        wind = response.list[31].wind.speed;
        humidity = response.list[31].main.humidity;
        $("#date4").text(city + " " + "(" + date + ")");
        $("#wicon4").attr("src", iconUrl);
        $("#temp4").text("Temp- " + temp + " F");
        $("#wind4").text("Wind Speed- " + wind + " MPH");
        $("#humidity4").text("Humidity- " + humidity + " %");
        //day 5
        date = dayjs().add(5, "day").format("MM/DD/YYYY");
        console.log(date);
        city = response.city.name;
        icon = response.list[39].weather[0].icon;
        iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
        temp = response.list[39].main.temp_max;
        wind = response.list[39].wind.speed;
        humidity = response.list[39].main.humidity;
        $("#date5").text(city + " " + "(" + date + ")");
        $("#wicon5").attr("src", iconUrl);
        $("#temp5").text("Temp- " + temp + " F");
        $("#wind5").text("Wind Speed- " + wind + " MPH");
        $("#humidity5").text("Humidity- " + humidity + " %");

        //search history button
        prevbtn.on("click", function (event) {
          let userSearch = event.target.textContent;
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
                icon = response.list[0].weather[0].icon;
                iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
                console.log(icon);
                temp = response.list[0].main.temp_max;
                wind = response.list[0].wind.speed;
                humidity = response.list[0].main.humidity;
                prevbtn = $("<button>").text(city);
                prevbtn.addClass("button");
                $("#previous").append(prevbtn);
                $("#date0").text(city + " " + "(" + date + ")");
                $("#wicon0").attr("src", iconUrl);
                $("#temp0").text("Temp- " + temp + " F");
                $("#wind0").text("Wind Speed- " + wind + " MPH");
                $("#humidity0").text("Humidity- " + humidity + " %");
                //day 1
                date = dayjs().add(1, "day").format("MM/DD/YYYY");
                console.log(date);
                city = response.city.name;
                icon = response.list[7].weather[0].icon;
                iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
                temp = response.list[7].main.temp_max;
                wind = response.list[7].wind.speed;
                humidity = response.list[7].main.humidity;
                $("#date1").text(city + " " + "(" + date + ")");
                $("#wicon1").attr("src", iconUrl);
                $("#temp1").text("Temp- " + temp + " F");
                $("#wind1").text("Wind Speed- " + wind + " MPH");
                $("#humidity1").text("Humidity- " + humidity + " %");
                //day 2
                date = dayjs().add(2, "day").format("MM/DD/YYYY");
                console.log(date);
                city = response.city.name;
                icon = response.list[15].weather[0].icon;
                iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
                temp = response.list[15].main.temp_max;
                wind = response.list[15].wind.speed;
                humidity = response.list[15].main.humidity;
                $("#date2").text(city + " " + "(" + date + ")");
                $("#wicon2").attr("src", iconUrl);
                $("#temp2").text("Temp- " + temp + " F");
                $("#wind2").text("Wind Speed- " + wind + " MPH");
                $("#humidity2").text("Humidity- " + humidity + " %");
                //day 3
                date = dayjs().add(3, "day").format("MM/DD/YYYY");
                console.log(date);
                city = response.city.name;
                icon = response.list[23].weather[0].icon;
                iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
                temp = response.list[23].main.temp_max;
                wind = response.list[23].wind.speed;
                humidity = response.list[23].main.humidity;
                $("#date3").text(city + " " + "(" + date + ")");
                $("#wicon3").attr("src", iconUrl);
                $("#temp3").text("Temp- " + temp + " F");
                $("#wind3").text("Wind Speed- " + wind + " MPH");
                $("#humidity3").text("Humidity- " + humidity + " %");
                //day 4
                date = dayjs().add(4, "day").format("MM/DD/YYYY");
                console.log(date);
                city = response.city.name;
                icon = response.list[31].weather[0].icon;
                iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
                temp = response.list[31].main.temp_max;
                wind = response.list[31].wind.speed;
                humidity = response.list[31].main.humidity;
                $("#date4").text(city + " " + "(" + date + ")");
                $("#wicon4").attr("src", iconUrl);
                $("#temp4").text("Temp- " + temp + " F");
                $("#wind4").text("Wind Speed- " + wind + " MPH");
                $("#humidity4").text("Humidity- " + humidity + " %");
                //day 5
                date = dayjs().add(5, "day").format("MM/DD/YYYY");
                console.log(date);
                city = response.city.name;
                icon = response.list[39].weather[0].icon;
                iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
                temp = response.list[39].main.temp_max;
                wind = response.list[39].wind.speed;
                humidity = response.list[39].main.humidity;
                $("#date5").text(city + " " + "(" + date + ")");
                $("#wicon5").attr("src", iconUrl);
                $("#temp5").text("Temp- " + temp + " F");
                $("#wind5").text("Wind Speed- " + wind + " MPH");
                $("#humidity5").text("Humidity- " + humidity + " %");
              });
            });
        });
      });
    });
});
