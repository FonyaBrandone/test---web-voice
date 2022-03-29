var input = document.getElementById('input');
var btn = document.getElementById('submit');

btn.addEventListener("click", function() {
    let texts = input.value;
    alert(texts);
    //utterance:

    let utterance = new SpeechSynthesisUtterance("Transcribing Text input! wait a second Please");
    speechSynthesis.speak(utterance);

    setTimeout(function() {
        utterance = new SpeechSynthesisUtterance(texts);
        speechSynthesis.speak(utterance);
    }, "5000");

});