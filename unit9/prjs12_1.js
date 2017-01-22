var web = new Array(5);
web[0] = "http://www.pageresource.com";
web[1] = "http://www.javascriptcity.com";
web[2] = "http://www.mydemos.com";
web[3] = "http://www.yahoo.com";
web[4] = "http://www.google.com";

var div = document.getElementById("random_link");
var integer = Math.floor(Math.random() * 5);
div.innerHTML = "<a href='" + web[integer] + "'>Random Link</a>";
