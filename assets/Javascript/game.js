
//declare variables

var wins = 0
var losses = 0
var guessesMade = []
var guessesLeft = 8

//list of words to choose from
var words = ["beach", "sand", "ocean", "waves", "fish", "sun", "swimsuit", "towel", "seashell"]

//choose random word from words array
var randomWord = words[Math.floor(Math.random() * words.length)];


//make empty word blanks
var answerBlanks = [];
for (var i = 0; i < randomWord.length; i++) {
    answerBlanks[i] = ("_");
  //  document.getElementById("currentword").innerHTML = answerBlanks;
}

// define reset function
function reset() {
    guessesMade = []
    document.getElementById("lettersguessed").innerHTML = guessesMade;
    guessesLeft = 8
    document.getElementById("guessesremain").innerHTML = guessesLeft;
    randomWord = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < randomWord.length; i++) {
        answerBlanks[i] = "_";
        document.getElementById("currentword").innerHTML = answerBlanks;
    }
}

//when user clicks on a letter
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log("Guess: " + userGuess);
    console.log("Correct word: " + randomWord);

    for (var j = 0; j < randomWord.length; j++) {
        if(randomWord[j] === userGuess) {
            answerBlanks[j] = userGuess;
        }
         else if (randomWord[j] !== userGuess) {
            guessesMade.push(userGuess);
            document.getElementById("lettersguessed").innerHTML = guessesMade;
            guessesLeft--;
            document.getElementById("guessesremain").innerHTML = guessesLeft;
            if (guessesLeft === 0) {
                losses++;
                document.getElementById("losses").innerHTML = losses;
                console.log("You LOSE!");
                reset();
            }
        }
    }

            // //Game over
            // function gameOver() {
            //     if (letterBlanks.indexOf("_") === -1) {
            //         wins++;
            //         alert("YA YOU WON!");
            //     } else {
            //         losses++;
            //         alert("SO SAD... YOU LOST")
            //     }


    
            // }
}