function getUser() {
	$.get('/getUser', function(data, status) {
		var html = "";
		html += "<h1>" + data.name + "</h1>";
		html += "<h2>" + data.username + "</h2>"
		document.getElementById("users").innerHTML = html;
	})	
}