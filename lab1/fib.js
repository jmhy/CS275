//Stores sequence of fib numbers to avoid recalculation
var fib_arr = [];

//Calculate fibonacci sequence and generate table of sequence
function fib_val(){
	var inStr = document.getElementById("in_textbox").value;
	var inInt = parseInt(inStr);
	
	//Check for positive integer inputs
	if(isNaN(inInt)){
		out.innerHTML = "<b>Invalid Input</b>";
		return;
	}
	else if(inInt < 0){
		out.innerHTML = "<b>Cannot compute Fib of a negative integer</b>";
		return;
	}
	else{
		//Generation for the specific cases of 0 and 1
		if(inInt == 0 || inInt == 1){
			if(inInt == 0){
				fib_arr.push(0);
			}
			else{
				fib_arr.push(0);
				fib_arr.push(1);
			}
			//Send results to webpage
			out.innerHTML = "<p>Fibonacci Value: " + inInt.toString() + "</p>\n" + fib_table();
		}
		//Generation for values 2 and above
		else{
			var prev = 0, next = 1, res = 0;
			fib_arr.push(0);
			fib_arr.push(1);
			for(i=1; i<inInt; i++){
				res = prev+next;
				fib_arr.push(res);
				prev = next;
				next = res;
			}
			//Send results to webpage
			out.innerHTML = "<p>Fibonacci Value: " + res.toString() + "</p>\n" + fib_table();
		}
		//Clear this so that new input generates a new table, rather than appends to existing one
		fib_arr = [];
	}
}

//Creates the actual html for table
function fib_table(){
	var htmlStr = "<table border='1'><tr><th>n</th><th>fib(n)</th></tr>";
	for(i=0; i<fib_arr.length; i++){
		htmlStr += "<tr><td>" + i.toString() + "</td><td>" + fib_arr[i].toString() + "</td></tr>";
	}
	htmlStr += "</table>"
	return htmlStr;
}