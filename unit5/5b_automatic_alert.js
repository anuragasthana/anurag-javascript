//I have coded so that we should see the automatic alert 
// followed by onload alert. This way I am sure that my automatic
//alert happens before onload alert.

//this alert happens before the page loads
window.alert("Automatic alert");

//function for onload alert
function onload_alert(){
    window.alert('Onload Alert');
}

//loop for killing time
var count = 0
for (count = 0; count <= 10000; count++) {
    //nothing here
}

//setup onload alert
document.getElementById("alert").onload = onload_alert;


