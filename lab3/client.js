//Gets and displays user zipcode and subsequently calls a function to get weather data
function run_client(){
	//Get seed and calculation specified by client
	var seed = document.getElementById("seed_input").value;
	var dropdown = document.getElementById("calc_opts");
	var opt = dropdown.options[dropdown.selectedIndex].value;
	//Seed and option will be sent to server in json
	var jsonObj = {
		"seed":seed,
		"calc":opt
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
		contentType: "application/json; charset=utf-8",
		data: jsonObj,
		dataType: "html",
		success: function(msg){
			
		},
		error: function(xhr, ajaxOptions, thrownError){
			
		}
	});
}