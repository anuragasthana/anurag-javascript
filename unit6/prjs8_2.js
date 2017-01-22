window.alert("Hi you are viewing my page with " + navigator.appName);
var has_Java = navigator.javaEnabled;
if (has_Java == true) {
    window.alert("You have Java enabled, that is cool!");
}
else {
    window.alert("No Java? Well,no fun stuff here then.");
}
window.alert("You are using " + navigator.platform);