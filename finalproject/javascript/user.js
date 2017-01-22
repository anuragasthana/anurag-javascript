/*  What does this file have ?
	1. Cookies - At least 1 cookie file used to affect the user experience 
	2. external javascript file
	3. document method getElementById is used
	4. Both Style comments
	5. onload event handler
*/

//Read the cookie
function getCookie(c_name)
{

var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
    {
    c_end = c_value.length;
    }
  c_value = unescape(c_value.substring(c_start,c_end));
  }
return c_value;
}

//Set the cookie
function setCookie(c_name,value)
{
var exdate=new Date();

/*Setting the expiry time for 5 minutes - in real practice will be more
 however setting it for 5 minutes make it easy to test */
  
exdate.setMinutes(exdate.getMinutes()+5);


var c_value=escape(value) + "; expires="+exdate.toUTCString();
document.cookie=c_name + "=" + c_value;

alert("Welcome to my website "+value+" !!");
window.location="newIndex.html";

}

// This method is called when the webpage is loaded
function checkCookie()
{
 var welcome;
 
var username=getCookie("username");
if (username!=null && username!="")
  {
   alert("Welcome again " + username);
   window.location="newIndex.html";
  }
else 
  {
  username=prompt("Please enter your username:","");
  if (username!=null && username!="")
    {
    setCookie("username",username);
    }
  }
}

document.getElementById("alert").onload = checkCookie;

