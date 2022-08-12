const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





let askGuess = function (secretNumber){
    rl.question("Enter a guess: ", answer => {
        // let result = checkGuess(answer);
        if (!checkGuess(answer, secretNumber)) {
         askGuess(secretNumber);
        } else {
            console.log("You win!");
            rl.close();
        }
    });
}


let randomInRange = function (min, max) {
    let ans = Math.random() * (max - min) + min;
    return Math.floor(ans);
}




// let secretNumber = randomInRange(0, 100);

function checkGuess(num, secretNumber) {

    if (Number(num) > secretNumber) {
        console.log("Too high.");
        return false;
    } else if (Number(num) < secretNumber) {
        console.log("Too low.");
        return false;
    } else if (Number(num) === secretNumber) {
        console.log("Correct!");
        return true;
    }
}

// askGuess();

let askRange = function (answer1) {
    rl.question("Enter a max number: ", answer1 => {
        rl.question("Enter a min number: ", answer2 => {
            console.log("I'm thinking of a number between " + answer2 + " and " + answer1 + "...");

            let min = Number(answer2);
            let max = Number(answer1)
            let secretNumber = randomInRange(min, max);
            askGuess(secretNumber);
        })
    })
}

askRange();
