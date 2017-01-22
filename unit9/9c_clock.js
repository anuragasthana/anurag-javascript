var twelve_time = document.getElementById("12_hour");
var twentyfour_time = document.getElementById("24_hour");
var t12;
var t24;
twelve_time.onclick = twelve;
twentyfour_time.onclick = twentyfour;


//display clock for 12 hour format
function twelveclock(){
    var clocktime = new Date();
    var hours = clocktime.getHours();
    var mins = clocktime.getMinutes();
    var secs = clocktime.getSeconds();
    var ampm = (hours >= 12) ? "P.M." : "A.M.";
    
    if (hours >= 13) {
        hours -= 12;
    }
    if (hours < 1) {
        hours = 12;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    
    var div_clock_12hr = document.getElementById("12time");
    div_clock_12hr.innerHTML = '<font color="blue" face="britannic bold" size="5">' + hours + ":" + mins + ":" + secs + " " + ampm + "</font>";
    t12 = setTimeout("twelveclock()", 1000);
    return false;
}

//diplay clock for 24 hour format
function twentyfourclock(){
    var clocktime1 = new Date();
    var hours1 = clocktime1.getHours();
    var mins1 = clocktime1.getMinutes();
    var secs1 = clocktime1.getSeconds();
    var ampm1 = (hours1 >= 12) ? "P.M." : "A.M.";
    
    if (hours1 > 24) {
        hours1 -= 23;
    }
    if (mins1 < 10) {
        mins1 = "0" + mins1;
    }
    if (secs1 < 10) {
        secs1 = "0" + secs1;
    }
    
    var div_clock_24hr = document.getElementById("24time");
    div_clock_24hr.innerHTML = '<font color="blue" face="britannic bold" size="5">' + hours1 + ":" + mins1 + ":" + secs1 + " " + ampm1 + "</font>";
    t24 = setTimeout("twentyfourclock()", 1000);
    return false;
}

function twelve(){
    twelveclock();
    if (t24 != null) {
        clearTimeout(t24);
        var div_clock_24hr = document.getElementById("24time");
        div_clock_24hr.innerHTML = "";
    }
}

function twentyfour(){
    twentyfourclock();
    if (t12 != null) {
        clearTimeout(t12);
        var div_clock_12hr = document.getElementById("12time");
        div_clock_12hr.innerHTML = "";
    }
}
