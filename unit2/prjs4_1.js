// This function takes 2 parameters mycar and paycheck and does a window alert 
function car_cost(mycar, paycheck){
    window.alert("You have a " + mycar + " and make $" + paycheck);
}

//This function returns an added text string
function get_added_text(){
    var textpart1 = "This project ";
    var textpart2 = "is almost fun!";
    var added_text = textpart1 + textpart2;
    return added_text;
}

car_cost("Mustang", 1500);
var alert_text = get_added_text();
window.alert(alert_text);
