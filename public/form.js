function getUser() {
	$.get('/getUser', function(data, status) {
		alert(JSON.stringify(data));
	})	
}