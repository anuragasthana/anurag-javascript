function newpage(){

    var confirm = window.confirm('Do you wish to continue ?');
    
    if (confirm) {
        window.clearTimeout("confirm");
		return false;
    }
    else {
    
        window.location.href = "http://www.google.com";
		return false;
    }
    
}

window.setTimeout("newpage()", 20000);
