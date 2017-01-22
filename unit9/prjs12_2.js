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
    
    var div_clock_12hr = document.getElementById("the_clock");
    div_clock_12hr.innerHTML = hours + ":" + mins + ":" + secs + " " + ampm;
    setTimeout("twelveclock()", 1000);
    return false;
}

twelveclock();
