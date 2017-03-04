//Using express to simplify handling of different client reqs
var express = require('express');
var http = require('http');
var app = express();
//refer to local dir, change if moving this script to another dir
app.use(express.static('.'));

//Create an instance of a mysql connection
var mysql = require('mysql');
var con = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'cs275',
	database: 'lab5'
});
con.connect(function(err){
	if(err){
		console.log('Error connecting to database');
		console.log(err);
	}
	else{
		console.log('Successfully connected to database');
	}
});

//send html for table display page
app.get('/tables', function (req,res){
	var html_str = `
		<h2 style='margin-top: 0'>Display a Table from Database</h2>
		<p>This page will allow you to query the database to display one of three possible tables: Courses, Grades, or Students. Note: all information contained within the database and displayed on this page is fictitious.</p>
		<p>To display the desired table, select the name of the table from the drop-down, then click 'Display Table'</p>
		<select id='opts'>
			<option value='course'>Courses</option>
			<option value='grades'>Grades</option>
			<option value='student'>Students</option>
		</select>
		<input type='button' onclick='getTable()' value='Display Table'>
		<br>
		<p>The selected table will appear below:</p>
		<div id='out'></div>`;
	console.log('Rendering table display page');
	res.send(html_str);
});

//query db for requested table and send formatted html table back to client
app.get('/gettable', function (req,res){
	//get table name from json in url data
	var tbl_name = req.query.t;
	console.log('Processing request for ' + tbl_name);
	con.query('SELECT * FROM lab5.' + tbl_name, function(err,rows,fields){
		if(err){
			console.log('Error during query processing');
			console.log(err);
			res.send('Error during query processing');
		}
		else{
			//contruct html to be sent to client
			var html_str = '<table border="1"><tr>';
			//process column headers
			var headers = [];
			for(i=0; i<fields.length; i++){
				headers.push(fields[i].name);
				html_str += '<th>' + fields[i].name + '</th>';
			}
			html_str += '</tr>';
			//process row values
			for(i=0; i<rows.length; i++){
				html_str += '<tr>';
				for(j=0; j<headers.length; j++){
					html_str += '<td>' + rows[i][headers[j]] + '</td>';
				}
				html_str += '</tr>';
			}
			html_str += '</table>'
			console.log('Sending ' + tbl_name);
			res.send(html_str);
		}
	});
});

//send html for transcripts display page
app.get('/transcripts', function (req,res){
	//query db for student info
	con.query('SELECT STUDENT_ID, NAME_FIRST, NAME_LAST FROM student ORDER BY NAME_LAST;', function(err,rows,fields){
		if(err){
			console.log('Error during student query processing');
			console.log(err);
			res.send('Error during student query processing');
		}
		else{
			//start contructing html to be sent to client
			var html_str = `
				<h2 style='margin-top: 0'>Display a Student Transcript from Database</h2>
				<p>This page will allow you to query the database to display a particular student's transcripts. If a new student was added to the database, their name will appear in the drop-down below. The &lt;select&gt; html elements are dynamically created. Note: all information contained within the database and displayed on this page is fictitious.</p>
				<p>To display the desired student's transcript, select the name of the student and a term/year, then click 'Display Transcript'</p>
				<select id="s_opts">`;
			//populate drop-down with student info
			for(i=0; i<rows.length; i++){
				html_str += '<option value="' + rows[i].STUDENT_ID + '">' + rows[i].NAME_LAST + ', ' + rows[i].NAME_FIRST + '</option>';
			}
			html_str += '</select>';
			//create nested query for term info because we want to dynamically populate the term selection next
			con.query('SELECT DISTINCT(TERM) FROM grades;', function(err,rows,fields){
				if(err){
					console.log('Error during term query processing');
					console.log(err);
					res.send('Error during term query processing');
				}
				else{
					//populate drop-down with terms/years available
					html_str += '<select id="t_opts"><option value="all">All</option>';
					for(i=0; i<rows.length; i++){
						html_str += '<option value="' + rows[i].TERM + '">' + rows[i].TERM + '</option>';
					}
					html_str += `</select>
						<input type='button' onclick='getTranscript()' value='Display Transcript'>
						<br>
						<p>The transcript will appear below:</p>
						<div id='out'></div>`;
					console.log('Rendering transcript display page');
					res.send(html_str);
				}
			});
		}
	});
});

//query db for student/term transcript and send formatted html table back to client
app.get('/gettrans', function (req,res){
	//get student id and term from json in url data
	var st_id = req.query.s;
	var term = req.query.t;
	console.log('Processing transcript request for student ID=' + st_id);
	
	if(term == "all"){
		//show all terms for student
		var q_str = 'SELECT student.STUDENT_ID AS "Student ID", NAME_FIRST AS "First Name", NAME_LAST AS "Last Name", TERM AS "Term/Year", course.COURSE_ID AS "Course ID", COURSE_DESC AS "Description", GRADE AS "Grade" FROM course, grades, student WHERE student.STUDENT_ID = grades.STUDENT_ID AND course.COURSE_ID = grades.COURSE_ID AND student.STUDENT_ID = ' + st_id + ';';
	}
	else{
		//show specific term for student
		var q_str = 'SELECT student.STUDENT_ID AS "Student ID", NAME_FIRST AS "First Name", NAME_LAST AS "Last Name", TERM AS "Term/Year", course.COURSE_ID AS "Course ID", COURSE_DESC AS "Description", GRADE AS "Grade" FROM course, grades, student WHERE student.STUDENT_ID = grades.STUDENT_ID AND course.COURSE_ID = grades.COURSE_ID AND student.STUDENT_ID = ' + st_id + ' AND TERM = "' + term + '";';
	}
	
	con.query(q_str, function(err,rows,fields){
		if(err){
			console.log('Error during transcript query processing');
			console.log(err);
			res.send('Error during transcript query processing');
		}
		else{
			//contruct html to be sent to client
			var html_str = '<table border="1"><tr>';
			//process column headers
			var headers = [];
			for(i=0; i<fields.length; i++){
				headers.push(fields[i].name);
				html_str += '<th>' + fields[i].name + '</th>';
			}
			html_str += '</tr>';
			//process row values
			for(i=0; i<rows.length; i++){
				html_str += '<tr>';
				for(j=0; j<headers.length; j++){
					html_str += '<td>' + rows[i][headers[j]] + '</td>';
				}
				html_str += '</tr>';
			}
			html_str += '</table>'
			console.log('Sending transcript');
			res.send(html_str);
		}
	});
});

//Any other URL request will redirect to the main page
app.get('*',function (req, res) {
	res.redirect('./index.html');
});

//Have the server listen to port 8080
app.listen(8080,function(){
	console.log('Server Running');
});