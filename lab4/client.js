//Gets and displays Calculation prompts on main page
function get_calc(){
	//Create URL to calculation page
	var URL = "http://localhost:8080/calc";	
	
	//Construct AJAX request to localhost
	$.ajax({
		type: "GET",
		url: URL,
		data: "{}",
		dataType: "html",
		success: function(msg){
			$("#content").html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert("Error contacting server!");
		}
	});
}

//Gets and displays factorial or summation result to calculation page
function run_calc(){
	//Get seed and calculation method specified by client
	var seed = $("#seed_input").get(0).value;
	var dropdown = $("#calc_opts").get(0);
	var opt = dropdown.options[dropdown.selectedIndex].value;
	//Seed will be sent to server in json
	var jsonObj = {
		"seed":seed
	};
	//Create URL based on option chosen
	var URL = "http://localhost:8080/";	
	if(opt == "fact"){
		URL += "fact";
	}
	else{
		URL += "sum";
	}
	
	//Construct AJAX request to localhost
	$.ajax({
		type: "GET",
		url: URL,
		data: jsonObj,
		dataType: "html",
		success: function(msg){
			$("#out_calc").html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert("Error contacting server!");
		}
	});
}