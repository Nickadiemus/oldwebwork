
document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  console.log("Loaded");
  //variables
  var width = window.innerWidth,
      height = window.innerHeight,
      focus_node = null,
      highlight_nude = null,
      outline = false;

  console.log(width);
  console.log(height);
  //uses color based schema
  var color = d3.scaleOrdinal(d3.schemeCategory20);

  // highlight color
  var highlight_color = "blue";
  var highlight_trans = 0.1;

  //node
  var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

    svg.append("svg:defs").selectAll("marker")
        .data(["end"])      // Different link/path types can be defined here
      .enter().append("svg:marker")    // This section adds in the arrows
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 42.5)
        .attr("refY", 0)
        .attr("markerWidth", 9)
        .attr("markerHeight", 9)
        .attr("orient", "auto")
      .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");

  svg.append("rect")
    .attr("width", width)
    .attr("height", height);


  //force simulation variable
  var simulation = d3.forceSimulation()
    .force("center", d3.forceCenter(width/2, height/2))
    .force("collide", d3.forceCollide(5))
    .force("charge", d3.forceManyBody()
      .strength(-10))
    .force("link", d3.forceLink()
      .distance(60)
      .strength(.5)
      .id(function(d) {
        console.log(d.roleNumber);
        return d.roleNumber;
    }));

  d3.select("body")
    .call(d3.drag()
      .container(d3.select("body").node())
      .subject( function(){
        console.log(d3.event);
        return simulation.find(d3.event.x, d3.event.y);
      })
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));


  d3.json("brother.json", function(err, graph){
    //checks error in loading file
    if(err) throw err;

    console.log(graph.nodes);

    simulation.nodes(graph.nodes)
      .force("link")
      .links(graph.links);



    var link = svg.selectAll(".link")
        .data(graph.links)
      .enter().append("line")
          .attr("class", "link")
          .attr("class", "link")
          .style("stroke-width", function(d) { return Math.sqrt(d.value); })
            .attr("marker-end", "url(#end)");

    var node = svg.selectAll(".node")
      .data(graph.nodes)
        .enter().append("g")
          .attr("class","node")

    node.append("circle")
      .attr("r", 6)
      .attr("fill", function(d) { return color(d.pledgeClass); });

    node.append("text")
      .attr("text-anchor", "bottom")
      .attr("dx", 8)
      .attr("dy", ".35em")
      .text(function(d) {
        return d.name;
      });


    simulation.on("tick", update);

    function update() {

        link.attr("x1", function(d) {return d.source.x;  })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node.attr("transform", function(d)
        {
          var r = 16
          d.x = Math.max(r, Math.min(width - r, d.x));
          d.y = Math.max(r, Math.min(height - r, d.y));
          return "translate(" + d.x + "," + d.y + ")";
      })

    }
  })

  //
  function dragstarted() {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d3.event.subject.fx = d3.event.subject.x;
    d3.event.subject.fy = d3.event.subject.y;
  }

  function dragged() {
    d3.event.subject.fx = d3.event.x;
    d3.event.subject.fy = d3.event.y;
  }

  function dragended() {
    if (!d3.event.active) simulation.alphaTarget(0);
    d3.event.subject.fx = null;
    d3.event.subject.fy = null;
  }

  //node size relative to zoom

  // If the drag behavior prevents the default click,
  // also stop propagation so we don’t click-to-zoom.

});
