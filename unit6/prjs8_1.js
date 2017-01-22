
/* function returns the price of the computer */
function get_price(){
    var the_price = 500;
    if (this.speed == "2GHz") {
        the_price += 200;
    }
    else {
        the_price += 100;
    }
    if (this.hdspace == "80GB") {
        the_price += 50;
    }
    else {
        the_price += 25;
    }
    if (this.ram == "1GB") {
        the_price += 150;
    }
    else {
        the_price += 75;
    }
    return the_price;
}

/* Computer object constructor */
function computer(speed, hdspace, ram){
    this.speed = speed;
    this.hdspace = hdspace;
    this.ram = ram;
    this.price = get_price;
}

var work_computer = new computer("2GHz", "80GB", "1GB");
var home_computer = new computer("1.5GHz", "40GB", "512MB");
var laptop_computer = new computer("1GHz", "20GB", "256MB");

var work_computer_price = work_computer.price();
var home_computer_price = home_computer.price();
var laptop_computer_price = laptop_computer.price();

document.write("<h2>The information on the laptops you requested:</h2>");
document.write("<BR>");
document.write("<p>");
document.write("<strong>Work Computer:</strong>");
document.write(work_computer.speed + "," + work_computer.hdspace + "," + work_computer.ram);
document.write("<BR>");
document.write("<strong>Payments:</strong>$" + work_computer_price);
document.write("</p>");
document.write("<BR>");
document.write("<p>");
document.write("<strong>Home Computer:</strong>");
document.write(home_computer.speed + "," + home_computer.hdspace + "," + home_computer.ram);
document.write("<BR>");
document.write("<strong>Payments:</strong>$" + home_computer_price);
document.write("</p>");
document.write("<BR>");
document.write("<p>");
document.write("<strong>Laptop Computer:</strong>");
document.write(laptop_computer.speed + "," + laptop_computer.hdspace + "," + laptop_computer.ram);
document.write("<BR>");
document.write("<strong>Payments:</strong>$" + laptop_computer_price);
document.write("</p>");
