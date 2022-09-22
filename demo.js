function welcomeMessage (guessNumb) {
    while (guessNumb != 2) {
        guessNumb = prompt("Wrong answer! Guess again! Guess number between 1 to 10 to continue!");
    }
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
}

let askUserName = prompt("What would you like to be called?");
let guessNumb = prompt("Guess number between 1 to 10 to continue!");

if (guessNumb != 2) {
    welcomeMessage ();
}

confirm("Enjoy the site!");