//this is the code that writes the alert and the second line of the document
var write_div1 = document.getElementById("div1");
var write_div1_title = write_div1.title;
window.alert(write_div1_title);

var write_div2 = document.createElement("div");
var write_div2_text = document.createTextNode("See you!");

write_div2.appendChild(write_div2_text);
write_div1.appendChild(write_div2);
