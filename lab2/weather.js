//Gets and displays user zipcode and subsequently calls a function to get weather data
function geolocate(){
	//Get user's API key to be used in data request from Weather Underground
	var key = document.getElementById("in_textbox").value;
	var URL = "http://api.wunderground.com/api/" + key + "/geolookup/q/autoip.json";
	
	//Construct AJAX request to site
	$.ajax({
		type: "GET",
		url: URL,
		contentType: "application/json; charst=utf-8",
		data: "{}",
		dataType: "jsonp",
		success: function(msg){
			//Display zipcode on page
			var zip = msg.location.zip;
			document.getElementById("out_zip").innerHTML = "Your detected zip code: " + zip;
			//Get weather data of zipcode obtained above
			get_weather(key, zip);
		}
	});
}

//Gets and displays weather data from Weather Underground
function get_weather(key, zip){
	var URL = "http://api.wunderground.com/api/" + key + "/hourly/q/" + zip + ".json";
	
	//Construct AJAX request to site
	$.ajax({
		type: "GET",
		url: URL,
		contentType: "application/json; charst=utf-8",
		data: "{}",
		dataType: "jsonp",
		success: function(msg){
			var data = msg.hourly_forecast;
			var out_html = "";
			//Construct html from parsed data
			for(i=0; i<data.length; i++){
				out_html += "<b>" + data[i].FCTTIME.pretty + ":</b><br/>" + "<img src='" + data[i].icon_url + "'>"
					+ data[i].condition + "<br/>Temperature: " + data[i].temp.english + "&#8457;<br/>Humidity: "
					+ data[i].humidity + "&#37;<br/><br/>";
			}
			//Modify the page to display the data
			document.getElementById("out_weather").innerHTML = out_html;
		}
	});
}

//Clear zip and weather from webpage
function cleardata(){
	document.getElementById("out_zip").innerHTML = "<br/>";
	document.getElementById("out_weather").innerHTML = "";
}