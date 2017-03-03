//Gets and displays Table Display prompts on main page
function displayTablesPage(){
	//Create URL to tables page
	var URL = "http://localhost:8080/tables";	
	
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

//get a specific database table to display on Database Tables page
function getTable(){
	//get selected table option
	var dropdown = $("#opts").get(0);
	var opt = dropdown.options[dropdown.selectedIndex].value;
	var URL = "http://localhost:8080/gettable";
	
	//Construct AJAX request to localhost
	$.ajax({
		type: "GET",
		url: URL,
		data: {"t":opt},
		dataType: "html",
		success: function(msg){
			$("#out").html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert("Error contacting server!");
		}
	});
}