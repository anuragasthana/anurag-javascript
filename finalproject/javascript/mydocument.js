/*  What does this file have ?
	1. Uses document method write, writeln (getElementbyId is used in another page )
	2. Uses document properties domain, lastmodified, title, URL, URLUnencoded
	3. Both Style comments
	4. Uses Arrays
*/

//the browser and page info
var mod = document.lastModified;
var name= window.name="awesomeness";
var heading="Browser and Page Information"
document.write("<b>"+heading+"</b><br>");
document.write("Length of the text above: "+heading.length+"<br>");
document.write("Last modified: " +mod.fontcolor("blue")+"<br>");
document.write("Domain: "+document.domain+"<br>");
document.write("You are using: " + navigator.appCodeName+"<br>");
document.write("Length of history: " +history.length+"<br>");
document.write("Name of the window: "+name.fontsize(20)+"<br>");
document.write("Height: "+window.innerHeight+" pixels"+"<br>");
document.write("Width: "+window.innerWidth+" pixels"+"<br>");
document.write("Color Depth: "+window.screen.colorDepth+"<br>");
document.write("The title: "+document.title+"<br>");
document.write("The URL: "+document.URL+"<br>");
document.write("The Unencoded URL: "+document.URLUnencoded+"<br>");
var java= navigator.javaEnabled();
if(java==true){
	document.write("You have Java enabled!"+"<br>");
}else{
	document.write("You do not have Java enabled"+"<br>");
}

document.write("Number of URLs in history list: " + history.length);
document.writeln("Have a nice day!");