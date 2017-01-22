function useMyColor()
{
var mylist=document.getElementById("color");
var d1 = document.getElementById("div1");
if ( mylist.options[mylist.selectedIndex].text== "blue" ) {
d1.style.color = "#0000FF";
} else if ( mylist.options[mylist.selectedIndex].text == "red" ) {
d1.style.color = "#FF0000";
} else if ( mylist.options[mylist.selectedIndex].text == "green" ){
d1.style.color = "#00FF00";
} else {
d1.style.color = "#00FFFF";
} 
}

