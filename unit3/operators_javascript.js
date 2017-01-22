var temp_c_southpole = -25;
var temp_c_lasvegas = 41;
var temp_f_southpole;
var temp_f_lasvegas;
var too_warm = 90;
var too_cold = 32;
var temp_f_sanfrancisco = 70;
var southpole = "The South Pole";
var lasvegas = "Las Vegas"
var sanfrancisco = "San Francisco"
var temp;
var place;


function show_place_climate(temp, place){
    if ((temp >= too_cold) && (temp <= too_warm)) {
        document.write("<font color=\"green\">" + place + " has a pleasant weather!!" + "<BR></font>");
    }
    else {
        if ((temp <= too_cold) || (temp >= too_warm)) {
            document.write(place + " has an extreme weather !!" + "<BR>");
        }
        else {
            document.write("<font color=\"yellow\">" + place + "not sure what the weather is !!</font>");
        }
    }
}



//Mathematical operators usage
temp_f_southpole = ((temp_c_southpole) * (9 / 5)) + 32;
document.write("<font color=\"blue\">Centigrade Temperature in the South Pole last week: " + temp_c_southpole + " C" + "<BR></font>");
document.write("<font color=\"blue\">Fahrenheit Temperature in the South Pole last week: " + temp_f_southpole + " F" + "<BR></font>");

temp_f_lasvegas = ((temp_c_lasvegas) * (9 / 5)) + 32;
document.write("<font color=\"red\">Centigrade Temperature in Las Vegas last week: " + temp_c_lasvegas + " C" + "<BR></font>");
document.write("<font color=\"red\">Fahrenheit Temperature in Las Vegas last week: " + temp_f_lasvegas + " F" + "<BR></font>" + "<BR>");


//Assignment operators
temp_f_southpole -= 10;
temp_f_lasvegas += 2;
document.write("<font color=\"blue\">Temperature in the South Pole today : " + temp_f_southpole + " F" + "<BR></font>");
document.write("<font color=\"red\">Temperature in Las Vegas today : " + temp_f_lasvegas + " F" + "<BR>" + "<BR></font>");

//Comparison operator
if (temp_f_lasvegas >= too_warm) {
    document.write("<font color=\"red\">It is too warm in Las Vegas today!!" + "<BR></font>");
}
else {
    document.write("<font color=\"yellow\"> The weather is good in Las Vegas today!" + "<BR></font>");
}
if (temp_f_southpole <= too_cold) {
    document.write("<font color=\"blue\">It is too cold in the South Pole today!!"+ "<BR>" + "<BR></font>");
}
else {
    document.write("font color=\"yellow\"> The weather is not normal in South Pole today!! - Global Warming???" + "<BR>" + "<BR></font>");
}

//Logical operator
temp = temp_f_sanfrancisco;
place = sanfrancisco;
show_place_climate(temp, place);

temp = temp_f_southpole;
place = southpole;
show_place_climate(temp, place);

temp = temp_f_lasvegas;
place = lasvegas;
show_place_climate(temp, place);

