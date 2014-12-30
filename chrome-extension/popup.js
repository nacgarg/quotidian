var xmlhttp = new XMLHttpRequest();
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";

function display(object) {
    document.getElementById('quote').innerHTML = object.quoteText+'<a><span id="sound" class="glyphicon glyphicon-volume-up"></span></a>';
    document.getElementById('author').innerHTML = object.quoteAuthor;
    document.getElementById('author').addEventListener("click", function() {
        window.open('https://en.wikipedia.org/wiki/Special:Search/' + object.quoteAuthor);
    });
    document.getElementById('sound').addEventListener("click", function() {
        chrome.tts.speak(object.quoteText);
    });
    document.getElementById('asdf').addEventListener("click", function() {
        window.open('http://www.forismatic.com/en')
    });
}
xmlhttp.open("POST", url, true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        display(myArr);


    }
}
xmlhttp.send();