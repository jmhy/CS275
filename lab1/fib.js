function fib_val(){
	var inStr = document.getElementById("in_textbox").value;
	var inInt = parseInt(inStr);
	
	if(isNaN(inInt)){
		out.innerHTML = "Invalid Input";
		return;
	}
	else if(inInt < 0){
		out.innerHTML = "Cannot compute Fib of a negative integer";
		return;
	}
	else{
		if(inInt == 0 || inInt == 1){
			out.innerHTML = inInt.toString();
			return;
		}
		var prev = 0, next = 1, res = 0;
		for(i=1; i<inInt; i++){
			res = prev+next;
			prev = next;
			next = res;
		}
		out.innerHTML = res.toString();
	}
}