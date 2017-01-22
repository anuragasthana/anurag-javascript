//Anurag Asthana
//993396

//display window alert when file is loaded
function onload_dynamic(){
    window.alert("Welcome to my Web page!!");
}

//display window alert when button is clicked
function onclick_dynamic(){
    window.alert("Thanks for stopping by!");
}

//display window alert when focus in form is blurred i.e.  not in focus
function onblur_dynamic(){
    window.alert("Thanks!");
}

//Set onlosd event function handler
document.getElementById("event_1").onload = onload_dynamic;

//Set onclick event function handler
document.getElementById("event_2").onclick = onclick_dynamic;

//Set onblur event dynamic handler
document.getElementById("event_3").onblur = onblur_dynamic;
