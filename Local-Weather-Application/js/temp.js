$(document).ready(function(){
  console.log("hello");
  var obj = {};

  obj = function() {
    return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
  }
  console.log(obj);
  /*$.ajax({
    url: "http://ipinfo.io/json?callback=JSON_CALLBACK",
    type: "GET",
    datatype: "jsonp",
    success: function(data){
      //$("div").removeClass("loader");
      //$("#dataBox").addClass("animated fadeIn");
      //$("#locationData").html("Location: "+ data.city + " " + data.country);
      console.log(data.loc);
      /*
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + long + '&appid=0f606e691728464d2a308949e25c9318&units=metric',
        type: "GET",
        datatype: "jsonp",
        success: function(data){
          console.log(data.weather[0].description);
          console.log(data.weather[0].icon);
          $("div").removeClass("loader");
          $("#dataBox").addClass("animated fadeIn");
          $("#locationData").html("Location: "+ data.name);
          $("#tempData").html("Temperature: " + data.main.temp + "°C");
          var descript = data.weather[0].description
          var temp = descript.split(" ");
          var sm1 = temp[0].charAt(0).toUpperCase() + temp[0].slice(1);
          var sm2 = temp[1].charAt(0).toUpperCase() + temp[1].slice(1);


          $("#overCastData").html(sm1 + ": " +sm2);
          var icon = data.weather[0].icon;
          if(icon === "04n"){
            $("#iconData").addClass("icon cloudy");
            $("#iconData").html("<div class = \"cloud\"></div><div class=\"cloud\"></div>")
          }

        }
      });

  });
  */
});
