function viewPoll() {
	$.post('/viewPoll', function(data, status) {
		var html = "<table>";
		html += "<tr>" + "<th>Question</th>" + "<th>End Date</th>" + "</tr>";
		for (var i = 0; i < data.length; ++i) {
			html += "<tr onclick='viewThePoll(" + data[i].id + ")'>";
			html += "<td>" + data[i].question + "</td>" + "<td>" + data[i].end_date.split('T')[0] + "</td>";
			html += "</tr>";
		}
		html += "</table>";
		document.getElementById("polls").innerHTML = html;
		$("#polls").show();
		$("#users").hide();
		$("#addPollForm").hide();
		$('#viewThePoll').hide();
	})
}

function addPoll() {
	var question = $("#question").val();
	var end = $("#end").val();
	var answer = $(".answer").toArray();
	var string = "";

	for (var i = 0; i < answer.length; i++) {
		string += answer[i].value + '-';
	}
	$.post('/addPoll', {question: question, end: end, answer: string}, function(data, status) {
		alert(data.Message);

		//alert("Almost Complete");
	})
	
}

function viewThePoll(id) {
	$.get('/viewThePoll?question=' + id, function(data, status) {
		$("#polls").hide();
		$("#users").hide();
		$("#addPollForm").hide();
		var html = "" + data[0].question + "<br>";
		for (var i = 0; i < data.length; i++) {
			html += "" + data[i].input + "<br>";
		}
		$('#viewThePoll').html(html);
		$('#viewThePoll').show();
	})
}

function hiddenPoll() {
	$("#addPollForm").hide();
}

function showPoll() {
	$("#addPollForm").show();
	$("#users").hide();
	$("#polls").hide();
	$('#viewThePoll').hide();
}

function appendTable() {
	$("#appendIt").after('<tr id = "appendIt"><td>Answer:<input type="text" class="answer"></td></tr>');
}