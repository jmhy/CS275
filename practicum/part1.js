//Gets septa schedule
function get_schedule(){
	var dropdown = $("#routes_select").get(0);
	var opt = dropdown.options[dropdown.selectedIndex].value;
	
	var URL = "http://www3.septa.org/hackathon/TransitView/?route=" + opt;	
	
	//Construct AJAX request to septa.org
	$.ajax({
		type: "GET",
		url: URL,
		contentType: "application/json; charset=utf-8",
		data: "",
		dataType: "jsonp",
		success: function(msg){
			var htmlStr = "<table border='1'><tr><th>Route</th><th>Vehicle ID</th><th>Block ID</th><th>Direction</th><th>Destination</th></tr>";
			for(i=0; i<msg.bus.length; i++){
				htmlStr += "<tr><td>" + opt + "</td><td>" + msg.bus[i].VehicleID.toString() + "</td><td>" + msg.bus[i].BlockID.toString() + "</td><td>" + msg.bus[i].Direction.toString() + "</td><td>" + msg.bus[i].destination.toString() + "</td></tr>";
			}
			htmlStr += "</table>";
			$("#out").html(htmlStr);
		},
		error: function(xhr, ajaxOptions, thrownError){
			$("#out").html("Error contacting septa.org!");
		}
	});
}