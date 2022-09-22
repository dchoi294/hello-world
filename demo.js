let message = "Hello, there!";

alert("What is your name?");

let askUserName = prompt("What would you like to be called?");

if (askUserName != "") {
    document.write("Hello, " + askUserName + "!" +" Welcome to my demo.");
} else {
    document.write("Welcome!, this is my demo.");
}
