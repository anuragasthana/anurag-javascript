/*  What does this file have ?
	1. valides number using regualr expression
	2. conditional operator is used, 
	3. Both Style comments
	4. comparison operator is used
	5. uses window method alert
	6. number property MAX_NUMBER, number object method toExponential
*/

var multiply_me = document.getElementById("multi");	

//onclick handler - validate and multiply numbers
multiply_me.onclick= function(){									
	var num_1= document.getElementById("num1").value;
	var num_2= document.getElementById("num2").value;
	var num_3= document.getElementById("num3").value;
					
    //regular expression having upto 10 digits					
	var tendigitnum = /^\d{1,10}$/; 
										
	if((num_1.length<1)||(num_2.length<1)||(num_3.length<1)){
		window.alert("Please enter a number for all three text boxes");
	} else {
		if ((num_1.search(tendigitnum) == -1) || (num_2.search(tendigitnum) == -1) ||(num_3.search(tendigitnum) == -1)) {
				window.alert("Please enter a valid number upto 10 digits for all 3 boxes!");
		} else {
					var product =num_1*num_2*num_3;
					if (product>Number.MAX_NUMBER) {
							window.alert("Product exceeds MAX_NUMBER");
					} else {
								window.alert("Product of numbers is: " + product.toExponential());
					} 

                }
		}
	return false;
}
