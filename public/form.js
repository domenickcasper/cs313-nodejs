function getUser() {
	$.get('/getUser', function(data, status) {
		document.getElementById('users').innerhtml = (JSON.stringify(data));
	})	
}