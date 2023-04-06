var buttonColors = ["red", "blue", "green", "yellow"] ;
var gamePattern = [] ;
var userClickedPattern = [] ;
var level = 0 ;

$(document).keydown(function(){

  $("h1").text("level " + level) ;
    nextSequence() ;
})


$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  //  console.log(userChosenColour) ;
    
    makeSound(userChosenColour) ;
    animatePress(userChosenColour) ;
    checkAnswer(userClickedPattern.length-1);
})

function nextSequence(){
    level++ ;
    $("h1").text("level " + level) ;
  var randomNumber = Math.floor(Math.random() * 4)  ;
  var randomChosenColor = buttonColors[randomNumber] ;
  gamePattern.push(randomChosenColor) ;

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColor) ;
  animatePress(randomChosenColor) ;
}

function makeSound(color){

  switch(color){

    case "red" :
          var red = new Audio("sounds/red.mp3") ;
          red.play() ;
          break ;
    case "blue" :
          var blue = new Audio("sounds/blue.mp3") ;
          blue.play() ;
          break ;
    case "green" :
          var green = new Audio("sounds/green.mp3") ;
          green.play() ;
          break ;
    case "yellow" :
          var yellow = new Audio("sounds/yellow.mp3") ;
          yellow.play() ;
          break ;
  }
}

function animatePress(color){

  var currentbtn = $("#" + color) ;
    currentbtn.addClass("pressed") ;
  
    // console.log(currentbtn) ;
  
    setTimeout(function(){
        currentbtn.removeClass("pressed") ;},100) ;
}

function checkAnswer(currentLevel) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    var wrong =  new Audio("sounds/wrong.mp3") ;
    wrong.play() ;
      var current = $("body") ;

      current.addClass("game-over") ;

      setTimeout(function(){
          current.removeClass("game-over") ;
      },200) ;
      $("h1").text("Game Over, Press Any Key to Restart") ;
      startOver() ;
  }

}

function startOver(){
  level = 0 ;
  gamePattern.length ;
}