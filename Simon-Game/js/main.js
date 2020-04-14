var onOff = -1;
var round = 1;
var state = true;
var sequence = [];
var inputSequence = [];


//Function checks to see if the on and off button is slided over
function startReady(){
  onOff++;
  if((onOff % 2) === 0){
    $("#counter").css("color", "red");
    $("#start").on('click', start);
  }
  else {
    $("#counter").css("color","#4C0000");
    $("#start").prop('onclick', null).off('click');
    state = false;
    sequence = [];
    round = 0;
    updateScore();

  }
}

//when the start button is clicked the game starts
function start(){
  newRound();
}

//starts the round of the game
function newRound(){
  updateScore();
  randomSequence();
  //copy of the randomly generated sequence
  inputSequence = sequence.slice(0);
  animate(sequence);
}
//animates the sequence of buttons
function animate(sequence){
    var i = 0;
    var interval = setInterval(function () {
      lightUp(sequence[i]);
      playSound(sequence[i]);
      i++;
      if(i >= sequence.length){
        clearInterval(interval);
        activateBoard();
      }
    }, 1000);
}

function activateBoard(){
  console.log("Waiting for user's response");
  $('button').on('click', function(item){
      playSound(item.currentTarget.dataset.tile);
      lightUp(item.currentTarget.dataset.tile);
      checkClick(item);
  });
}
function checkClick(item){
  var correctAnswer = inputSequence.shift();
  var userAnswer = item.currentTarget.dataset.tile;
  state = (correctAnswer == userAnswer);
  console.log(state);
  checkAnswer();
}
function checkAnswer(){
  console.log("checking Answer");
  if(inputSequence.length === 0 && state){
    deactivateBoard();
    newRound();
  }
  else if(!state){
    deactivateBoard();
    endGame()
  }
}

function lightUp(item){
  var $tile = $('[data-tile=' + item + ']').addClass('light');
  console.log($tile);
  window.setTimeout(function(){
    $tile.removeClass('light');
  }, 800);
}

function randomSequence(){
  var r = Math.floor(Math.random() * 4) + 1;
  sequence.push(r);
}

function deactivateBoard(){
  $('button').off('click');
}

function endGame(){
  $('#n').text("LOSER");
}

function updateScore(){

  if(round < 10){
    $('#counter').text("0" + round);
  }
  else{
    $('#counter').text(round);
  }
  round++;
}
function playSound(item){
  var audio = $('<audio autoplay></audio>');
  audio.append('<source src="sounds/' + item + '.mp3" type="audio/mp3" />');
  $("#sound").html(audio);
}
$(document).ready(function(){
    $("#init").on('click',startReady);
});
