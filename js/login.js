const correct_answer = "Admin";
let useranswer = prompt("What Is The Passcode?");

if (useranswer === correct_answer) {
    alert("Correct, Click Ok To Proceed");
    document.getElementsByTagName("body")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.display = "block";
} else {
    alert("Incorrect, Click Ok To Proceed");
    window.location.href = "index.html";
}
