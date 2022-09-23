function welcomeMessage (guessNumb) {
    let count = 1;
     while (guessNumb != 2) {
        guessNumb = prompt("Wrong answer! Guess again! Guess number between 1 to 10 to continue!");
        count ++;
    }
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
    alert("You guessd " + count + " times!");
}

let askUserName = prompt("What would you like to be called?");
let guessNumb = prompt("Guess number between 1 to 10 to continue!");

if (guessNumb != 2) {
    let guessCount = welcomeMessage (guessNumb);
} else {
    confirm("You got it at once!");
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
}

confirm("Enjoy the site!");

function makeImage() {
    
}