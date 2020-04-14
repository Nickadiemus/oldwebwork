var channels = ["freecodecamp", "shroud", "esl_csgo", "sacriel", "nickadiemus"];

var channelsAll = [];
var getData = () => {
  channels.forEach(channel => {
    function makeURL(type,name){
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';

    };
    var twitchItem = {
      "Name": "",
      "Status": "",
      "ImageURL": "",
      "Link": ""
    }
    function setLogo(logo){
      twitchItem.ImageURL = logo;
    }
    function setLink(link){
      twitchItem.Link = link;
    }
    function setName(name){
      twitchItem.Name = name;
    }
    function setStatus(status){
      twitchItem.Status = status;
    }
    $.getJSON(makeURL('streams', channel), (data) => {
      var status, name;
      name = channel;
      if (data.stream === null) {
        status = "Offline";
      }
      else {
          status = data.stream.game;
      };
      $.getJSON(makeURL('channels', channel), (data) =>{
        setName(name);
        setStatus(status);
        setLogo(data.logo);
        setLink(data.url);
        channelsAll.push(twitchItem);
        console.log(twitchItem);
      });
    });
  });
};

var clearData = clearData => {
  return $("#displaySection").html("");
};

$(document).ready(  () => {
  getData();
  console.log(channelsAll);

  $("#all").on("click", () => {
    clearData();
    for(var i = 0; i < channelsAll.length; i++){
        $("#displaySection").append("<div class =\"bodyDisplay row row-span\"> <div class = \"col-sm-3\"> <img class = \"smaller-image radius\"src = \""+ channelsAll[i].ImageURL +"\" style=\"width:150px;height:150px;\"></div><div class = \"col-sm-3 name text-center\">" + "<a href = \"" + channelsAll[i].Link + "\" target = \"blank_\">" + channelsAll[i].Name + " </a></div><div class = \"col-sm-6 description text-center\">" + channelsAll[i].Status + "</div></div>");
    }
  });

  $("#online").on("click", () => {
    clearData();
    for(var i = 0; i < channelsAll.length; i++){
      if(channelsAll[i].Status !== "Offline"){
          $("#displaySection").append("<div class =\"bodyDisplay row row-span\"> <div class = \"col-sm-3\"> <img class = \"smaller-image radius\"src = \""+ channelsAll[i].ImageURL +"\" style=\"width:150px;height:150px;\"></div><div class = \"col-sm-3 name text-center\">" + "<a href = \"" + channelsAll[i].Link + "\" target = \"blank_\">" + channelsAll[i].Name + " </a></div><div class = \"col-sm-6 description text-center\">"+ channelsAll[i].Status + "</div></div>");
      }
    }
  });
  $("#offline").on("click", () => {
    clearData();
    for(var i = 0; i < channelsAll.length; i++){
      if(channelsAll[i].Status === "Offline"){
          $("#displaySection").append("<div class =\"bodyDisplay row row-span\"> <div class = \"col-sm-3\"> <img class = \"smaller-image radius\"src = \""+ channelsAll[i].ImageURL +"\" style=\"width:150px;height:150px;\"></div><div class = \"col-sm-3 name text-center\">" + "<a href = \"" + channelsAll[i].Link + "\" target = \"blank_\">" + channelsAll[i].Name + " </a></div><div class = \"col-sm-6 description text-center\">"+ channelsAll[i].Status + "</div></div>");
      }
    }
  });
  console.log("Hello");
});
