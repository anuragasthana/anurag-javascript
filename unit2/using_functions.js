//define variables
var myheading = "<h2><font color=\"red\">This is my webpage!</font></h2>";
var text = "<font color=\"green\">This JavaScript file makes use of Variables</font>";
var linktag = "<a href =\"http://www.google.com\">click this to go to google </a>";
var begineffect = "<em>";
var endeffect = "</em>";
var linebreak = " <br>";

// function definition
function funct_variable(myheading, text, linktag, begineffect, endeffect, linebreak){
    document.write(myheading);
    document.write(linebreak);
    document.write(begineffect + text + endeffect);
    document.write(linebreak);
    document.write(linktag);
}

//function is called here
funct_variable(myheading, text, linktag, begineffect, endeffect, linebreak);
