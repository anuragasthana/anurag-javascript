
/* This function calculates the interest and also prints the 
	customer name and interest earned. */
function calculate_interest(){
    var interest = 0;
    interest = (this.principal * this.time * this.rate) / 100;
	document.write(this.customer+ " earned " + interest + " as interest." + "<BR>");
    return interest;
}

/* Simple interest object  constructor*/
function SimpleInterest(customer, principal, time, rate){
    this.customer = customer;
    this.principal = principal;
    this.time = time;
    this.rate = rate;
    this.interest = calculate_interest;
}

var Tom_interest = new SimpleInterest("Tom", 1000, 3, 8);

var John_interest = new SimpleInterest("John", 2000, 3, 4);



var Tom_interest_value = Tom_interest.interest();

var John_interest_value = John_interest.interest();

if (Tom_interest_value == John_interest_value) {
    document.write("Tom and John earn equal interest");
}
else {
    if (Tom_interest_value > John_interest_value) {
        document.write("Tom's interest earned is more than that of John's");
    }
    else {
        document.write("John's interest earned is greater than that of Tom's");
    }
}
