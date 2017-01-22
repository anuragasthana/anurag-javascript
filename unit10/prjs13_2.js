var email = document.getElementById("email");
email.onclick = function get_add(){
    var email_add = window.prompt("Enter your email");
    var sign = email_add.indexOf("@");
    var dot = email_add.indexOf(".");
    if ((dot == -1) || (sign == -1)) {
        window.alert("Sorry, Invalid email address. Try again");
        get_add();
        
    }
    else {
        window.alert("Thanks for entering you email!");
    }
};
