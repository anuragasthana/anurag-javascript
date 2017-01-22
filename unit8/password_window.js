
var password_submit = document.getElementById("password_submit");

//Onclick for submit button will check for username and password
//if user name is "Anurag" and password is "12345"
//then take user to the next page
password_submit.onclick = function(){
    var user = document.getElementById("usr").value;
    var password = document.getElementById("pwd").value;
    if ((user.length < 1) || (password.length < 1)) {
        window.alert("Please enter all data!");
		return false;
    }
    else 
        if ((user == "Anurag") && (password == "12345")) {
            //open a new window here
            window.open("8a_newpage.html", "awesome", "width=600, hight=200, directories=yes,location=yes, menubar=yes, resizeable=yes,scrollbars=yes,status=yes,toolbar=yes");
			return false;
        }
        else {
            window.alert("Access denied!!");
			return false;
        }
};
