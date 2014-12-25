var xmlhttp = new XMLHttpRequest();
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";

function display(object) {
    document.getElementById('quote').innerHTML = object.quoteText;
    document.getElementById('author').innerHTML = object.quoteAuthor;
    document.getElementById('author').addEventListener("click", function() {
        window.open(object.quoteLink)
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
