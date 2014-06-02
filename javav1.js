

 answer = Math.floor(Math.random() * 100); //calculates random number from 1-100 as correct answer
 i = 5; //number of guesses allowed at beginning of game
 duplicateArr = []; //creates empty array to track player guesses for duplicates



$("#input-button").on("click", function() {
  event.preventDefault();
  userInput = document.getElementById("user-input").value;

  duplicate = (jQuery.inArray(userInput, duplicateArr)!==-1)
  if (duplicate) { //Checks for duplicate inputs with array created above
    alert("You have already guessed this number. Please pick another.")
    i++; //adds back one guess for a duplicate input
  };

  if (userInput >= 0 && userInput <= 100 && userInput.length > 0) { //Guess count only reduces with valid guess
    i--;
    duplicateArr.push(userInput); //adds user input to the array to track guesses
  }
  else if (userInput.length == 0) { //Alert if empty field is submitted as guess
    alert("Please enter a number from 0-100.");
  }
  else {
    alert("Please enter a number from 0-100."); //Alert if input is not number from 0-100
  };

  $("#remaining-guesses").children("span").text(i); //Adds text to show number of guesses left

  if (i <= 0) { //notifies player if there are no more guesses left
    $("#remaining-guesses").hide();
    $("#over").show();
    $("#reset").show(); //shows Play Again button

  }

  $('#user-input').val(''); //empties the input field after each guess


  output = function() { //function to determine correct response to a player's guess

    diff = userInput - answer;
    if (diff > 15) {
      return  "You are ice cold! Guess lower."
    }
    else if (diff <= 15 && diff > 5) {
      return "You are warm. Guess lower."
    }
    else if (diff <= 5 && diff > 0) {
      return "You are hot! Guess lower."
    }
    else if (diff < -15) {
      return "You are ice cold! Guess higher."
    }
    else if (diff >= -15 && diff < -5) {
      return "You are warm. Guess higher."
    }
    else if (diff >= -5 && diff < 0) {
      return "You are hot! Guess higher."
    }
    else {
      return "Congratulations! You guessed right!";
      $("#over").hide();
    };
  };
  if (userInput >= 0 && userInput <= 100 && userInput.length > 0 && !duplicate) {
    $("#guess-result").text(output()); // shows whether user's guess was hot or cold given a valid guess
  }
  else {
    $("#guess-result").text(''); //clears prior guess result after an invalid guess
  }

});

$("#reset").on("click", function() {
  i = 5;
  $("#guess-result").text('');
  $("#remaining-guesses").children("span").text(i);
  $("#remaining-guesses").show();
  $("#over").hide();
  $("#reset").hide();
  duplicateArr = [];
  answer = Math.floor(Math.random() * 100);
});


