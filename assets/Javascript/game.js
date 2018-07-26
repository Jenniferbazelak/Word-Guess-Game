
//declare variables

var wins = 0
var losses = 0
var guessesMade = []
var guessesLeft = 8
var words = ["beach", "sand", "ocean", "waves", "fish", "sun", "swimsuit", "towel", "seashell"]
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//choose random word from words array
var randomWord = words[Math.floor(Math.random() * words.length)];


//make empty word blanks
var answerBlanks = [];
for (var i = 0; i < randomWord.length; i++) {
    answerBlanks[i] = ("_");
}
document.getElementById("currentword").textContent = answerBlanks.join("");


// define reset function
function reset() {
    guessesMade = []
    document.getElementById("lettersguessed").innerHTML = guessesMade;
    guessesLeft = 8
    document.getElementById("guessesremain").innerHTML = guessesLeft;
    randomWord = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < randomWord.length; i++) {
        answerBlanks[i] = "_";
        document.getElementById("currentword").innerHTML = answerBlanks.join("");
    }
}

//define answerBlank function

function updateanswerBlanks(l, index) {
    answerBlanks.splice(index, 1, l);
}

//GAME STARTS HERE
//when user clicks on a letter
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log("Guess: " + userGuess);
    console.log("Correct word: " + randomWord);

    guessesMade.push(userGuess);
    document.getElementById("lettersguessed").innerHTML = guessesMade;

    // alert if not a letter
    if (!letterArray.includes(guess)) {
         console.log("User pressed: " + userGuess + " Not a letter.");
        alert("Please press a letter, not a special key.");
        return;
    }

    // alert if already picked that letter
    if (guessesMade.includes(userGuess)) {
        console.log(userGuess + " was already guessed.");
        alert("You already guessed " + userGuess + ". Pick another letter.")
        return;
    }


    //update the answerBlanks for current word  
    for (var j = 0; j < randomWord.length; j++) {
        if (randomWord[j] === userGuess) {
            updateanswerBlanks(userGuess, j);
        }
    }
    if (!answerBlanks.includes("_")) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        console.log("You WIN!");
    }

    else if (randomWord[j] !== userGuess) {
        guessesLeft--;
        document.getElementById("guessesremain").innerHTML = guessesLeft;
        if (guessesLeft === 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            console.log("You LOSE!");
            reset()
        }
    }
}



