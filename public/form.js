function getUser() {
	$.get('/getUser', function(data, status) {
		var html = "";
		html += "<h1>Welcome " + data[0].name + "!</h1>";
		html += "<h2>Your username is: " + data[0].username + "</h2>"
		document.getElementById("users").innerHTML = html;

	$("#users").show();
	$("#polls").hide();
	$("#addPollForm").hide();
	})	
}

function viewPoll() {
	$.post('/viewPoll', function(data, status) {
		var html = "<table>";
		html += "<tr>" + "<th>Question</th>" + "<th>Start Date</th>" + "<th>End Date</th>" + "</tr>";
		for (var i = 0; i < data.length; ++i) {
			html += "<td>" + data[i].question + "</td>" + "<td>" + data[i].start_date + "</td>" + "<td>" + data[i].end_date + "</td>";

		}
		html += "</table>";
		document.getElementById("polls").innerHTML = html;
		$("#polls").show();
		$("#users").hide();
		$("#addPollForm").hide();
	})
}

function addPoll() {
	$.post('/addPoll', function(data, status) {
		
	})
	alert("Fun Time");
}

function hiddenPoll() {
	$("#addPollForm").hide();
}

function showPoll() {
	$("#addPollForm").show();
	$("#users").hide();
	$("#polls").hide();

}