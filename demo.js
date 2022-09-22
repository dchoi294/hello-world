let askUserName = prompt("What would you like to be called?");
let guessNumb = prompt("Guess number between 1 to 10 to continue!")

if (askUserName != "") {
    while (guessNumb != 2) {
        if (guessNumb == 2) {
            guessNumb = prompt("Wrong answer! Guess again! Guess number between 1 to 10 to continue!");
        }
    }
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
}

confirm("Enjoy the site!");