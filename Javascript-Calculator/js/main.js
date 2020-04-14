//Waits for the html to load before accessing javascript

var mathOps = ['/','*','-','+','=','.'];
var values = [];
$(document).ready(function(){
   $("#buttons").click(function(a) {
    var v = processValue(a);
    console.log("Before: " + values);
    console.log(v);
    if(v !== null){
      display(v);
    }
    console.log("After: " + values);
   });
});

function processValue(a){
  console.log(values.length);
  var isIn = false;
  if(values.length === 0){
    switch (a.target.value) {
      case "AC":
        return null;
        break;
      case "CE":
        return null;
        break;
      case "/":
        return null;
        break;
      case "*":
        return null;
        break;
      case "-":
        return null;
        break;
      case "+":
        return null;
        break;
      case "=":
        return null;
        break;
      case ".":
        return null;
        break;
      default:
        values.push(a.target.value);
        return a.target.value;
    }
  }
  else if(2 <= values.length){
    console.log("In else if");
    var valCheck = a.target.value;
    switch(valCheck) {
      case "/":
        valCheck = "/"
        break;
      case "*":
        valCheck = "*"
        break;
      case "-":
        valCheck = "-"
        break;
      case "+":
        valCheck = "+"
        break;
      case "=":
        valCheck = "="
        break;
      case ".":
        valCheck = "."
        break;
      default:
          values.push(valCheck);
          return valCheck;
      }

      for(var i = 0; i < mathOps.length; i++){
        console.log(values[values.length-1] + " " + mathOps[i]);
        if(values[values.legnth-1] === mathOps[i])
        {
          isIn = true;
        }
      }

      console.log(isIn);

      if( (valCheck === values[values.length-1]) || (isIn === true) )
      {
        return null;
      }
      else{
        values.push(valCheck);
        return valCheck;
      }
  }
  else{
    values.push(a.target.value);
    return a.target.value;
  }
};

function display(v){
  /* clears chained values */
  if(v === "AC"){
    values = clear();
  }
  /* clears last entry */
  else if(v === "CE"){
    values = values.pop();
  }
  else if(v === "="){
    /* FIX CALCULATING VALUES*/
    var answer = calculateValues(values);
    values = clear();
    $(".display-text").html(answer)
    values.push(answer);

  }
  else{
    $(".display-text").html(v);
  }
};

function clear(){
  $(".display-text").html("0");
  return values.splice(values.length,values.length);

};

function calculateValues(values){
  /*Gets rid of the equals sign in array*/
  values.pop();
  var newValues =[];
  var temp = "";
  for(var i = 0; i < values.length; i++){
    if((values[i] === "-" )){
      newValues.push(temp);
      newValues.push(values[i]);
      temp = "";
    }

    else if(values[i] === "+"){
      newValues.push(temp);
      newValues.push(values[i]);
      temp = "";
    }

    else if(values[i] === "/"){
      newValues.push(temp);
      newValues.push(values[i]);
      temp = "";
    }

    else if(values[i] === "*"){
      newValues.push(temp);
      newValues.push(values[i]);
      temp = "";
    }
    else if(i === values.length-1){
      newValues.push(temp.concat(values[i]));
    }
    else{
      temp = temp.concat(values[i]);
    }

  }
  var joinedValues = newValues.join(" ");
  console.log(joinedValues);
  var answer = eval(joinedValues);
  console.log(answer);
  return answer;
}
