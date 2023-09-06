var inputBuffer = '';
var triggerPhrase = 'login';

document.addEventListener('keydown', function(event) {
    inputBuffer += event.key.toLowerCase();
    
    if (inputBuffer.includes(triggerPhrase)) {
        window.location.href = './verify.html';
    }
});
