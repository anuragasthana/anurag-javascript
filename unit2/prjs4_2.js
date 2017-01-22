
/*	This function takes 2 strings as parameters 
 and adds them together with a space in between the strings.
 The result is returned in add_text */
function add_text(textpart1, textpart2){
    var add_text = textpart1 + " " + textpart2;
    return add_text;
}

/* This function calls add_text with "Hi", "there" 
 and does a window alert of the result */
function get_added_text(){
    var result = add_text("Hi", "there!");
    window.alert(result);
}

//Main Script starts here

//Window alert for Hi There
get_added_text();

//Text display on mail page in strong font
document.write("<strong> This is some strong text </strong>");

//A regular text display on next line 
var new_text = add_text("Regular", "text!");
document.write("<br>" + new_text);
