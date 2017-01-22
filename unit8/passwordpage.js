var enter = document.getElementById("enter");

//on submit button click comapre password 
//with 54321, if it matches open a new window 
enter.onclick = function(){
    var password = document.getElementById("pass").value;
    if (password.length < 1) {
        window.open("http://www.miniclip.com");
    }
    else {
        if (password == "54321") {
            //open a new window here
            window.open("8b_newpage2.html", "awesome", "width=600, height=200, directories=yes,location=yes, menubar=yes, resizeable=yes,scrollbars=yes,status=yes,toolbar=yes");
        }
        else {
            window.alert("Incorrect password!You will now be directed to the homepage.");
            window.open("http://google.com");
        }
    }
};
