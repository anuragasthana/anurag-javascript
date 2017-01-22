
var multi_tables = document.getElementById("multi_tables");

//Function to display the tables from 5 to 10
//when multi_tables is clicked
multi_tables.onclick = function(){

    var table_output_5;
    var table_output_6;
    var table_output_7;
    var table_output_8;
    var table_output_9;
    var table_output_10;
    //write down tables from 5 - 10
    document.write("<table width='100%' height='80%' border='1'cellpadding='10' cellspacing='10'>");
    document.write("<tr><th>5 Tables</th><th>6 Tables</th><th>7 Tables</th><th>8 Tables</th><th>9 Tables</th><th>10 Tables</th></tr>");
    for (i = 1; i < 11; i++) {
        table_output_5 = " 5 x " + i + "= " + 5 * i;
        table_output_6 = " 6 x " + i + "= " + 6 * i;
        table_output_7 = " 7 x " + i + "= " + 7 * i;
        table_output_8 = " 8 x " + i + "= " + 8 * i;
        table_output_9 = " 9 x " + i + "= " + 9 * i;
        table_output_10 = " 10 x " + i + "= " + 10 * i;
        document.write("<tr><td>" + table_output_5 + "</td>" + "<td>" + table_output_6 + "</td>" + "<td>" + table_output_7 + "</td>" + "<td>" + table_output_8 + "</td>" + "<td>" + table_output_9 + "</td>" + "<td>" + table_output_10 + "</td></tr>");
    }
    document.write("</table><br>");
    document.write("<form><input type='button' id='close_page' value='Close Window' onclick='window.close();'></form>");
    
    
};
