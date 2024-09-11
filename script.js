var textarea = document.getElementById("keylogger");

document.addEventListener("keypress", function(event) {
    var key = event.key.toLowerCase();

    if (key.match(/[a-z]/)) {
        if (document.activeElement === textarea) {
            textarea.value += key.repeat(1);
        } else {
            textarea.value += key;
        }
    }
});
