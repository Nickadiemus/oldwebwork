//waits for html and css to load before script is loaded
$(document).ready(function(){
  var long, lat;
  function onPositionReceived(position){

     long = position.coords.longitude;
     lat = position.coords.latitude;
     console.log(position);
     //Waits for geolocation to be retrieved
     setValues(long,lat);
  }
  //allows values to be manipulated
  function setValues(long,lat){
    console.log("Longitude: " + long);
    console.log("Latitude: " + lat);
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + long + '&appid=0f606e691728464d2a308949e25c9318&units=metric',
      type: "GET",
      datatype: "jsonp",
      success: function(data){
        console.log(data);
        console.log(data.name);
        console.log(data.main.temp);
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


        $("#overCastData").html(sm1 + ": " + sm2);
        var icon = data.weather[0].icon;
        if(icon === "04n"){
          $("#iconData").addClass("icon cloudy");
          $("#iconData").html("<div class = \"cloud\"></div><div class=\"cloud\"></div>")
        }

      }
    });
  }
  function locationNotRecieved(positionError){
    console.log(positionError);
  }
  if (navigator.geolocation) {
    var nav = navigator.geolocation.getCurrentPosition(onPositionReceived,locationNotRecieved);
    /*var watch = navigator.geolocation.watchPosition(onPositionReceived,locationNotRecieved);
    console.log(watch);
    */
  }

});
