var mywin_width = 900;
mywin_width = window.innerWidth;
//mywin_width= document.body.clientWidth;
//document.write("mywin_width is:" + mywin_width);
if (mywin_width >= 1000) {
    window.location = "http://www.pageresource.com";
}
else {
    window.location = "http://www.javascriptcity.com";
}
