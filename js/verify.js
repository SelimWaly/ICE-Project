var inputBuffer = '';
var triggerPhrase = 'login';

document.addEventListener('keydown', function(event) {
    inputBuffer += event.key.toLowerCase();
    
    if (inputBuffer.includes(triggerPhrase)) {
        if (inputBuffer === triggerPhrase) {
            window.location.href = './verify.html';
        }
        else {
            inputBuffer = '';
        }

    }
});


