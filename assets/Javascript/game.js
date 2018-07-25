

//when game starts
// function initializeGame() {
//     var wins = 0
//     var guessRemaining= 8
//     var lettersGuessed = [];
//     var answerBlanks = [];





//list of words to choose from
var words = ["beach", "sand", "ocean", "waves", "fish", "sun", "swimsuit", "towel", "seashell"]

//choose random word from words array
var word = words[Math.floor(Math.random() * words.length)];


//make empty word blanks
var answerBlanks = [_];
for (var i = 0; i< word.length; i++){
    answerBlank[i]= "_";
    document.getElementById("currentword").innerHTML = answerBlanks;
}


    //function below starts when first letter is typed
document.onkeyup = function(event){

    //determine which key was pressed
    var userGuess = event.key;
    var remainingGuesses=8

    // for (var j = 0; j < word.length; j++) {
        // If (word[j] === userGuess) {
        //  answerBlanks[j] = userGuess;
        //     }
        //  else (word[j] !== userGuess){
        //     //then put wrong user guess in guessed letters
        //     }
    



    //During Game
   


//Game over
function gameOver() {
	if (letterBlanks.indexOf("_") === -1) {
		wins++;
		alert("YA YOU WON!");
	} else {
		losses++;
		alert("SO SAD... YOU LOST")
	}


//var totalWins = document.getElementById ("wins")
// var remainingGuesses = document.getElementById ("guessesremain")
// var guessingWord = document.getElementById ("currentword")
// var guessedLetters = document.getElementById ("lettersguessed")

}
}