function getUser() {
	$.get('/getUser', function(data, status) {
		var html = "";
		html += "<h1>Welcome" + data[0].name + "!</h1>";
		html += "<h2>" + data[0].username + "</h2>"
		document.getElementById("users").innerHTML = html;
	})	
}

function createPoll() {
	$.post('/getUser', function(data, status) {
		var html = "<ul";
		for (var i = 0; i < data.length; ++i) {
			html += "<li>" + data[i].poll + "</li>";
		}
		html += "</ul>";
		document.getElementById("polls").innerHTML = html;
	})
}