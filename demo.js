function welcomeMessage (guessNumb, count) {
    while (guessNumb != 2) {
        guessNumb = prompt("Wrong answer! Guess again! Guess number between 1 to 10 to continue!");
        count++;
    }
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
    return count;
}

let askUserName = prompt("What would you like to be called?");
let guessNumb = prompt("Guess number between 1 to 10 to continue!");
let count;

if (guessNumb != 2) {
    let guessCount = welcomeMessage (guessNumb, count);
    alert("You guessd " + count + " times!");
}

confirm("Enjoy the site!");