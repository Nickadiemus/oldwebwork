//Waits for the html to load before accessing javascropt
 $(document).ready(function(){
  var count = 0;
  var quotes = [
    {
      quote: "\"Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV\"",
      name: "-Morty"
    },
    {
      quote: "\"Listen, Morty, I hate to break it to you but what people call \"love\" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science\"",
      name: "-Rick"
    },
    {
      quote: "\"What about the reality where Hitler cured cancer, Morty? The answer is: Don't think about it.\"",
      name: "-Rick"
    },
    {
      quote: "\"It's like the N word and the C word had a baby and it was raised by all the bad words for Jews.\"",
      name: "-Rick"
    },
    {
      quote: "\"I mean, why would a Pop-Tart want to live inside a toaster, Rick? I mean, that would be like the scariest place for them to live. You know what I mean?\"",
      name: "-Morty"
    },
    {
      quote:"\"Wubba lubba dub dub\"",
      name: "-Rick"
    },
    {
      quote: "\"Lick lick lick my balls\"",
      name: "-Rick"
    }
  ];
  $("#getMessage").on("click", function(){
    $("#quoteBox").addClass("animated flipInX");
    $(".quote").html(quotes[count].quote);
    $(".quoter").html(quotes[count].name);
    if(count == quotes.length-1){
      count = 0;
    }
    else {
      count++;
    }
  });
  $("#quoteBox").removeClass("animated flipInX");
});
