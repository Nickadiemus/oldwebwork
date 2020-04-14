//form api link https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=13gR4jd6774UY6JP62ctv2Xs_E0MfYc6sDyBzoRYU6p0&sheet=Form1

const $ = require('jquery');
const d3 = require('d3');
const topojson = require('topojson');
const handlebars = require('handlebars');


document.addEventListener('DOMContentLoaded', function() {

  //size of canvas
  var width = 1000,
  height = 500,
  centered;

  //projection of the svg
  var projection = d3.geo.albersUsa()
      .scale(1100)
      .translate([width / 2, height / 2]);

  //lines for projection
  var path = d3.geo.path()
      .projection(projection)
      .pointRadius(1.5);

  //scalable object svg
  var svg = d3.select("#usa").append("svg")
      .attr("width", width)
      .attr("height", height);

  //elements of the svgs
  svg.append("rect")
      .attr("class", "background")
      .attr("width", width)
      .attr("height", height)
      .on("click", clicked); //for click to zoom function

  //adds a group class for the svg
  var g = svg.append("g");

  //queues json files to load
  queue()
    .defer(d3.json, "https://gist.githubusercontent.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/us.json") // Load US Counties
    //.defer(d3.json, "https://script.googleusercontent.com/macros/echo?user_content_key=K1E85EiRkGvkNnkwdiT6jmlX9xSU6hUvetLTNzpCcd_jSC2GpNbwZfr0KcbLfJdiHrUouVDeG7bCkVA0V_Fi5YMBTitaxVEdOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp1q6LyBxbset-sbB7gU77AXzTewdOjiNZcuPDH50tUN-GOHXQiXJz0ANQ8AP0ES9ozQJv8DXWa1hoIgY-huuTFg&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx")
    .defer(d3.json, "http://ec2-18-221-88-190.us-east-2.compute.amazonaws.com/api/getAlumni")
    .await(ready); // Run 'ready' when JSONs are loaded

  function ready(error, usa, alumni){
    if(error) throw error;
    console.log(usa);
    console.log(alumni.TAResponses);

    g.append("g")
      .attr("id", "states")
    .selectAll("path")
      .data(topojson.feature(usa, usa.objects.states).features)
    .enter().append("path")
      .attr("d", path)
      .on("click", clicked);

    g.selectAll("g").append("path")
      .datum(topojson.mesh(usa, usa.objects.states, function(a, b) { return a !== b; }))
      .attr("id", "state-borders")
      .attr("d", path);

    // appends circles to the map converted from lat and long coords
    // based on the location of the json data

    g.append("g").selectAll("svg")
      .data(alumni.TAResponses).enter().append('image')
      .attr('xlink:href', function(d){
        return 'https://rawgit.com/Nickadiemus/98f062bae03101ea981394d3e4c28d36/raw/ea111f86ab153ef1b437428b42676f4b8b49d462/mapLogo.svg';
      })
      .attr("width", 10)
      .attr("height", 15)
      .attr("transform", "translate(" + -6 + "," + -15 + ")")
      .attr("x", function(d) {
        var c = [d.lng, d.lat];
        p = projection(c);
        if(p !== null){
            return p[0];
        }
        else{
          return -100;
        }

      })
      .attr("r", 1.5)
      .attr("y", function(d){
        var c = [d.lng, d.lat];
        p = projection(c);
        if(p !== null){
            return p[1];
        }
        else {
          return -100;
        }

      })
      .on("click", function(d)
        {
          var temp = []
          for(var i = 0; i < alumni.TAResponses.length; i++)
          {
            if( (alumni.TAResponses[i].lng === d.lng) && (alumni.TAResponses[i].lat === d.lat) )
            {
              temp.push(alumni.TAResponses[i]);
            }
          }

          d3.select(this).attr("class", "incident hover");
          if(temp.length > 1){
            for(var j = 0; j < temp.length; j++){
              $("#display").append(
              "<div class = \"display text-center\">" +
                "<div class = \"text-center display-group-header \" >" +
                  "<img  class = \"awesome-img\" src = \""+temp[j].Link_To_Your_Picture+"\"/>" +
                  "<div class = \"awesome-name\" >" + temp[j].Full_Name + "</div>" +
                  "<div class = \"awesome-location\" >" + temp[j].Current_Location + "</div>" +
                "</div>" +
                "<div class = \"text-left display-group-description \">" +
                  "<div>" + "<i class = \"fa fa-briefcase\">" + "</i> " + temp[j].Current_Company + " </div>" +
                  "<div>" + "<i class = \"fa fa-group\">" + "</i> " + temp[j].Current_Position_at_Company + "</div>" +
                  "<div>" + "<i class = \"fa fa-twitter\">" + "</i> " + temp[j].Twitter_Handle + "</div>" +
                  "<div>" + "<i class = \"fa fa-linkedin-square\"> " + "</i> " + temp[j].Please_Enter_your_LinkedIn_URL + "</div>" +
                  "<div>" + "<i class = \"fa fa-user\">" + "</i> " + temp[j].Favorite_Memory_at_Awesome_Inc + "</div>" +
                "<div>" +
              "</div>"
              );
            }
          }
          else {
            $("#display").append(
            "<div class = \"display text-center\">" +
              "<div class = \"text-center display-group-header \" >" +
                "<img  class = \"awesome-img\" src = \""+temp[j].Link_To_Your_Picture+"\"/>" +
                "<div class = \"awesome-name\" >" + temp[j].Full_Name + "</div>" +
                "<div class = \"awesome-location\" >" + temp[j].Current_Location + "</div>" +
              "</div>" +
              "<div class = \"text-left display-group-description \">" +
                "<div>" + "<i class = \"fa fa-briefcase\">" + "</i> " + temp[j].Current_Company + " </div>" +
                "<div>" + "<i class = \"fa fa-group\">" + "</i> " + temp[j].Current_Position_at_Company + "</div>" +
                "<div>" + "<i class = \"fa fa-twitter\">" + "</i> " + temp[j].Twitter_Handle + "</div>" +
                "<div>" + "<i class = \"fa fa-linkedin-square\"> " + "</i> " + temp[j].Please_Enter_your_LinkedIn_URL + "</div>" +
                "<div>" + "<i class = \"fa fa-user\">" + "</i> " + temp[j].Favorite_Memory_at_Awesome_Inc + "</div>" +
              "<div>" +
            "</div>"
            );
          }
          console.log(temp);
          d3.select(this).attr("class", "incident hover");
      })
      .on("mouseover", function(d){
    		d3.select("#display").text("");
    		d3.select(this).attr("class","incident");
    	});
  }

  function clicked(d) {
      var x, y, z;
      console.log(d);
      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        z = 2.5;
        centered = d;
      }
      else {
        x = width / 2;
        y = height / 2;
        z = .95;
        centered = null;
      }

      g.selectAll("path")
          .classed("active", centered && function(d) { return d === centered; });

      g.transition()
        .duration(850)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + z + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1.5 / z + "px");
  }

});
