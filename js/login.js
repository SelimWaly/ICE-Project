const correct_answer = "Admin";
let useranswer = prompt("What Is The Passcode?");
document.body.style.display = "none";
if (useranswer == correct_answer) {
    alert("Correct, Click Ok To Proceed");
    document.body.style.display = "block";
} else {
    alert("Incorrect, Click Ok To Proceed");
    window.location.href = "index.html";
}
