//get elementID div1
var div_1 = document.getElementById("div1");

//get elementId c_link
var answer_link = document.getElementById("c_link");

//when link is clicked change color and text
answer_link.onclick = function(){
    div_1.style.backgroundColor = "#CCCCCC"
    div_1.innerHTML = "<strong>Right now!</strong> Was that quick or what?"
    return false
};
