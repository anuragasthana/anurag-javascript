/*  What does this file have ?
	1. contains a password prompt
	2. conditional operator is used, 
	3. Both Style comments
	4. comparison operator is used
	5. uses window methods - prompt, alert, confirm
	6. uses window properties - location
*/


//function for the password in prefamily.html 
function pass(){
                var password = window.prompt("Password:");
                if (password.length < 1) {
                    window.alert("Please enter a valid password");
                    pass()
                }
                else {
                    if (password == "7142128") {
                        window.location = "family.html";
                    }
                    else {
                        window.alert("Sorry, wrong password");
                        var again = window.confirm("Do you wish to try again?");
                        document.write(again);
                        if (again == false) {
                            window.location = "newIndex.html";
                        }
                        else {
                            window.location = "prefamily.html";
                        }
                    }
                }
            }
			pass()