var b = 5;
var s = 25;
var log = false;
$(document).ready(function(){
  var clockListener = false;
  time(clockListener);

});

function time(clockListener){

  $("#plusB").on("click", function(){
    b += 1;
    $("#break").html(b);
    console.log(b);
  });

  $("#minusB").on("click", function(){
    b -= 1;
    $("#break").html(b);
    console.log(b);
  });

  $("#plusS").on("click", function(){
    s += 1;
    $("#session").html(s);
    $("#time").html(s);
    console.log(s);
  });

  $("#minusS").on("click", function(){
    s -= 1;
    $("#session").html(s);
    $("#time").html(s);
    console.log(s);
  });
  $("#start").on("click", function(){
    // changes the start/stop listener
    if(!log){log = true;}
    else{log = false;}
    start(log);
  });

};

function start(){
  if(log === true){
    startTime();
    console.log("started");
  }
  else{
    console.log("Stopped");
  }
};

function startTime(){
  var timeW = s * 60;
  var timeR = b * 60;

  //used to switch between session and break, 0 and 1 to shorten bits
  var count = 0;
  var countDownWork = new Date().clearTime().addSeconds(timeW);
  var countDownRest = new Date().clearTime().addSeconds(timeR);
  //updates countdown ever 1000 milliseconds (second)
  var x = setInterval(function() {
    if(count === 0)
    {
      var nowW = countDownWork.addSeconds(-1);
      document.getElementById("time").innerHTML = nowW.toString('H:mm:ss');

      //fade in Animation
      $("#time").addClass("animated fadeIn");

      if(nowW.toString('H:mm:ss') === '0:00:00')
      {
        $("#time").removeClass("animated fadeIn");
        count++;
      }
      //exit interval
      else if(log === false)
      {
        clearInterval(x);
        document.getElementById("time").innerHTML = "STOPPED";

      }
    }
    else{
      $("#time").addClass("animated fadeIn");
      var nowR = countDownRest.addSeconds(-1);
      document.getElementById("time").innerHTML = nowR.toString('H:mm:ss');
      if(nowR.toString('H:mm:ss') === '0:00:00'){
        count--;
        //resets the pomodoro clock
        countDownWork = countDownWork.clearTime().addSeconds(timeW);
        countDownRest = countDownRest.clearTime().addSeconds(timeR);
        $("#time").removeClass("animated fadeIn");
      }
      else if(log === false)
      {
        clearInterval(x);
        document.getElementById("time").innerHTML = "STOPPED";

      }
    }
    // Counts Down to selected time;
  }, 1000);
}
