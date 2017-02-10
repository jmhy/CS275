//Gets and displays user zipcode and subsequently calls a function to get weather data
function run_client(){
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
			$("#out").html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			$("#out").html("Error contacting server!");
		}
	});
}