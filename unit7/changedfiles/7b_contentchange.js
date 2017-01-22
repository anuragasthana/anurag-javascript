//this is the code for the modify and delete buttons
var content_2 = document.getElementById("new_content");
var content_1 = document.getElementById("original_content")
var myTitle = document.getElementById("mainTitle");

content_2.onclick = function(){
    myTitle.innerHTML = '<h1><strong>The New Content</strong></h1>';
}
content_1.onclick = function(){
    myTitle.innerHTML = '<br/> <br/>';
}
