function getUser() {
	$.get('/getUser', function(data, status) {
		var html = "";
		html += "<h1>" + data[0].name + "</h1>";
		html += "<h2>" + data[0].username + "</h2>"
		document.getElementById("users").innerHTML = html;
	})	
}