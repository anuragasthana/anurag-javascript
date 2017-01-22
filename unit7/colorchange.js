//this is the code that gets the text element "div1
var d1 = document.getElementById("div1");

//get element "blue" from drop down menu
var color_blue = document.getElementById("blue");

//get element "red" from drop down menu 
var color_red = document.getElementById("red");

//get element "green" from drop down menu
var color_green = document.getElementById("green");

//handle onclick for blue
color_blue.onclick = function(){
    d1.style.color = "#0000FF";
};

//handle onclick for red
color_red.onclick = function(){
    d1.style.color = "#FF0000";
};

//handle onclick for green
color_green.onclick = function(){
    d1.style.color = "#00FF00";
};
