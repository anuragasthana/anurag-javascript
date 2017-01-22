var list = [];
var clickme = document.getElementById("clickme");
var sorterabc = document.getElementById("sorterabc");
var sorter123 = document.getElementById("sorter123");

var locate = window.location;

//method called when submit button is clicked
clickme.onclick = function(){
    var str = document.getElementById("txt");
    if (str.value.length < 1) {
        window.alert("Please enter a valid string and press submit button!!");
        return false;
    }
    window.alert("You entered :" + str.value + "\n" + "Click Sort buttons to sort numerically or alphabetically");
    list = str.value.split(" ");
}

//method called when numeric sort button is clicked
sorter123.onclick = function(){
    var origString = "";
    if (list.length < 1) {
        window.alert("Please press submit button before sorting!!");
        return false;
    }
    for (var i = 0; i < list.length; i++) {
        origString += list[i] + " ";
    }
    
    list.sort(function(a, b){
        return a - b
    });
    var sortedString = "";
    for (var i = 0; i < list.length; i++) {
        sortedString += list[i] + " ";
    }
    
    document.write("<body bgcolor='#FF0000'>");
    document.write("<p align='center'>");
    document.write("<table cellpadding='10' cellspacing='10' border='1' bgcolor='#00FF00'><tr><th>Original String</th></tr>");
    document.write("<tr><td><p align='center'>" + origString + "</p></td></tr>");
    document.write("</table>");
    document.write("<br>");
    document.write("<br>");
    document.write("<table cellpadding='10' cellspacing='10' border='1' bgcolor='yellow'><tr><th>Numerically Sorted String</th></tr>");
    document.write("<tr><td>" + sortedString + "</td></tr>");
    document.write("</table");
    document.write("</p>");
    document.write("</body");
};

//method called when alphabetical sort button is clicked
sorterabc.onclick = function(){
    var origString = "";
    if (list.length < 1) {
        window.alert("Please press submit button before sorting!!");
        return false;
    }
    for (var i = 0; i < list.length; i++) {
        origString += list[i] + " , ";
    }
    
    list.sort();
    var sortedString = "";
    for (var i = 0; i < list.length; i++) {
        sortedString += list[i] + " , ";
    }
    document.write("<body bgcolor='#0000FF'>");
    document.write("<p align='center'>");
    document.write("<table cellpadding='10' cellspacing='10' border='1' bgcolor='#00FF00'><tr><th>Original String</th></tr>");
    document.write("<tr><td><p align='center'>" + origString + "</p></td></tr>");
    document.write("</table>");
    document.write("<br>");
    document.write("<br>");
    document.write("<table cellpadding='10' cellspacing='10' border='1' bgcolor='yellow'><tr><th>Sorted Alphabetically</th></tr>");
    document.write("<tr><td><p align='center'>" + sortedString + "</p></td></tr>");
    document.write("</table>");
    document.write("</p>");
    document.write("</body");
};



