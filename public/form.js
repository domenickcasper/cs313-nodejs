function getUser() {
	$.get('/getUser', function(data, status) {
		document.getElementById("users").innerHTML = (JSON.stringify(data));
		document.getElementById("demo");
	})	
}