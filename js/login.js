const correct_answer = "Admin";
let useranswer = prompt("What Is The Passcode?");
if (useranswer == correct_answer) {
    document.getElementsByTagName("body")[0].style.display = "none";
        alert("Correct, Click Ok To Proceed")
        document.getElementsByTagName("body")[0].style.display = "block";
}
else {
    document.getElementsByTagName("body")[0].style.display = "none";
        alert("Incorrect, Click Ok To Proceed")
        window.location.href = ("index.html");
}
