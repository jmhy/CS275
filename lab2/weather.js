var tmp_url = "http://api.wunderground.com/api/97e90a34d69af68a/geolookup/q/autoip.json"

function geolocate(){
	var key = document.getElementById("in_textbox").value;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			var json = $.parseJSON(xhttp.responseText);
			document.getElementById("out").innerHTML=json.location.zip;
		}
	}
	
	var URL = tmp_url
	//var URL = "http://api.wunderground.com/api/" + key + "/geolookup/q/autoip.json";
	
	xhttp.open("GET",URL,true);
	xhttp.send();
}