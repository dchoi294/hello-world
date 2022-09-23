function welcomeMessage (guessNumb) {
    let count = 1;
     while (guessNumb != 2) {
        guessNumb = prompt("Wrong answer! Guess again! Guess number between 1 to 10 to continue!");
        count ++;
    }
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
    alert("You guessd " + count + " times!");
}

function makeImage() {
    let numb = prompt("How many balls do you want at most 7");
    if(numb >= 0 && numb <= 7){
        for(let i = 0; i < numb; i++) {
            document.write('<img style="width:100px;" src="ball.jpg" alt="baseball"/>');
        }
    }
}

let askUserName = prompt("What would you like to be called?");
let guessNumb = prompt("Guess number between 1 to 10 to continue!");

if (guessNumb != 2) {
    let guessCount = welcomeMessage (guessNumb);
} else {
    confirm("You got it at once!");
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
}

makeImage();

confirm("Enjoy the site!");

