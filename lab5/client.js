//get and display Table Display prompts on main page
function displayTablesPage(){
	//Create URL to tables page
	var URL = 'http://localhost:8080/tables';	
	
	//Construct AJAX request to localhost
	$.ajax({
		type: 'GET',
		url: URL,
		data: '{}',
		dataType: 'html',
		success: function(msg){
			$('#content').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

//get a specific database table to display on Database Tables page
function getTable(){
	//get selected table option
	var dropdown = $('#opts').get(0);
	var opt = dropdown.options[dropdown.selectedIndex].value;
	var URL = 'http://localhost:8080/gettable';
	
	//Construct AJAX request to localhost
	$.ajax({
		type: 'GET',
		url: URL,
		data: {'t':opt},
		dataType: 'html',
		success: function(msg){
			$('#out').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

//get and display Transcripts Display prompts on main page
function displayTransPage(){
	//Create URL to Transcripts page
	var URL = 'http://localhost:8080/transcripts';
	
	//Construct AJAX request to localhost
	$.ajax({
		type: 'GET',
		url: URL,
		data: '{}',
		dataType: 'html',
		success: function(msg){
			$('#content').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

//get a specific transcript table to display on Transcripts page
function getTranscript(){
	//get selected student and term option
	var stud_dropdown = $('#s_opts').get(0);
	var term_dropdown = $('#t_opts').get(0);
	var s_opt = stud_dropdown.options[stud_dropdown.selectedIndex].value; //value is student ID
	var t_opt = term_dropdown.options[term_dropdown.selectedIndex].value;
	var URL = 'http://localhost:8080/gettrans';
	
	//Construct AJAX request to localhost
	$.ajax({
		type: 'GET',
		url: URL,
		data: {'s':s_opt, 't':t_opt},
		dataType: 'html',
		success: function(msg){
			$('#out').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

//get and display Add Student prompts on main page
function displayStudentPage(){
	//Create URL to Transcripts page
	var URL = 'http://localhost:8080/student';
	
	//Construct AJAX request to localhost
	$.ajax({
		type: 'GET',
		url: URL,
		data: '{}',
		dataType: 'html',
		success: function(msg){
			$('#content').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}

//add new student to database with information supplied by client
function addStudent(){
	var URL = 'http://localhost:8080/addstudent';
	
	//Construct AJAX request to localhost
	$.ajax({
		type: 'POST',
		url: URL,
		//pull data from html form for new student's info
		data: $('#studentForm').serialize(),
		success: function(msg){
			$('#out').html(msg);
		},
		error: function(xhr, ajaxOptions, thrownError){
			alert('Error contacting server!');
		}
	});
}