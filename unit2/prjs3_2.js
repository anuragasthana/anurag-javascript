var myheading = "<h1>This is My Web Page!</h1>";
var linktag = "<a href=\"http://www.javscriptcity.com\">Web site Link!</a>";
var sometext = "This text can be affected by other statements.";

/* can be toggled between emphasized and strong depending on which section of problem you are in */
//var begineffect = "<em>"
//var endeffect = "</em>"
var begineffect = "<strong>";
var endeffect = "</strong>";

var newsection = "<br>";


document.write(myheading);
document.write(begineffect);
document.write(sometext);
document.write(endeffect);
document.write(newsection);
document.write(linktag);
document.write(newsection);
document.write(sometext);
