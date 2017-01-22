var convert = document.getElementById("convert");
var Centbox = document.getElementById("Cent");
var Farbox = document.getElementById("Far");

//function called when convert button iss clicked
convert.onclick = function(){
    var Cent = Centbox.value;
    var Far = Farbox.value;
    
    if ((Cent.length < 1) && (Far.length < 1)) {
        window.alert("Please enter a valid value for Centigrade or Farenheit");
        return false;
    }
    
    if ((Cent.length > 1) && (Far.length < 1)) {
        var Farenheit = Cent * 9 / 5 + 32;
        Farbox.value = " ";
        Farbox.value = Farenheit;
        return false;
    }
    
    if ((Cent.length < 1) && (Far.length > 1)) {
        var Centigrade = (Far - 32) * 5 / 9;
        Centbox.value = " ";
        Centbox.value = Centigrade;
        return false;
    }
    
    if ((Cent.length > 1) && (Far.length > 1)) {
        window.alert("Please enter only one valid value for Centigrade or Farenheit");
        return false;
    }
    
};

