function namecheck(){
    var the_name = window.prompt("Please enter your name");
    var first_char = the_name.charAt(0);
    if (first_char != "S") {
        window.alert("Please enter a name that starts with a capital s");
        namecheck();
    }
    else {
        document.write(the_name);
    }
}

namecheck();
