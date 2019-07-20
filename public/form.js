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
		$("#addPollForm").hide();
		$('#viewThePoll').hide();
		$('#viewTheResults').hide();
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
	})
	$('#viewThePoll').show();
	$('#polls').hide();
	$('#addPollForm').hide();
	
}

function viewThePoll(id) {
	$.get('/viewThePoll?question=' + id, function(data, status) {
		$("#polls").hide();
		$("#addPollForm").hide();
		var html = "" + data[0].question + "<input type='button' class='button' onclick='viewResults(" + id + ")' value='View Results'>" + "<br>";
		for (var i = 0; i < data.length; i++) {
			html += "<input type='radio' id='stuff' name='stuff' value='" + data[i].id + " '>"  + data[i].input + "<br>";
		}
		html += "<input type='submit' class = 'button' onclick='submitPoll(" + id + ")'>";
		$('#viewThePoll').html(html);
		$('#viewThePoll').show();
		$('#viewTheResults').hide();
	})
}

function viewResults(id) {
	$.get('/viewResults?count=' + id, function(data, status) {
		//$('#viewThePoll').hide();
		var html = "";
		for (var i = 0; i < data.length; i++) {
			html += "<p>" + data[i].input + " " + data[i].count + "</p>" + "<br>";
		}
		$('#viewTheResults').html(html);
		$('#viewTheResults').show();
		$('#viewThePoll').hide();
		
	})
}



function submitPoll(id) {
	$.post('/submitPoll', {id:$('#stuff:checked').val()}, function(data, status) {
		viewResults(id);
	})
}

function hiddenPoll() {
	$("#addPollForm").hide();
}

function showPoll() {
	$("#addPollForm").show();
	$("#polls").hide();
	$('#viewThePoll').hide();
	$('#viewTheResults').hide();
}

function appendTable() {
	$("#appendIt").after('<tr id = "appendIt"><td>Answer:<input type="text" class="answer"></td></tr>');
}