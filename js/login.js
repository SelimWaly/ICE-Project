const correct_answer = "Admin";
let useranswer = prompt("What Is The Passcode?");
if (useranswer == correct_answer) {
        alert("Correct, Click Ok To Proceed")
}
else {
        alert("Incorrect, Click Ok To Proceed")
        window.location.href = ("index.html");
}
