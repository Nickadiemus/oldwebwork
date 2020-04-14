$(document).ready(function(){
  var val
  $(document).keyup(function (e) {
    if ($(".input1:focus") && (e.keyCode === 13)) {
        var val = document.getElementById("inputVal").value;
        var url = 'http://www.wikipedia.org//w/api.php?action=opensearch&format=json&search=' + val + '&callback=%3F&utf8=1';
        searchVal(url);
    }
    else {
      $("#sub").on("click" , function(){
        //gets the value from user input
        var val = document.getElementById("inputVal").value;
        //Resets Value for input
        document.getElementById("inputVal").value = "";
        var url = 'http://www.wikipedia.org//w/api.php?action=opensearch&format=json&search=' + val + '&callback=%3F&utf8=1';
        //calls the searchVal function
        searchVal(url);
      });
    }
    });
    
  function searchVal(url){
    //utilizes an ajax call to request the user's input
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'jsonp',
        headers: { 'Api-User-Agent': '*' },
        success: function(data) {
           console.log(data);
           $("#mainContainer").addClass("fadeOut")
           setTimeout(function () {
             $("#mainContainer").removeClass();
             $("#mainContainer").addClass("snapToTop animated fadeIn")
           }, 2);
           setTimeout(function() {
             for(var i = 0; i < data[1].length; i++){
               $("#mainContainer").append("<a class = \"link-tags\" href = \"" + data[3][i] + "\" target = \"blank_\"> <div class = \"row row-span container-fluid animated fadeIn\"> <h3> "+ data[1][i] +" </h3> <br> <p> " + data[2][i] + " </p> </div></a>");
             }
           }, 4);
        }
    });
  }
  console.log(val);
});
