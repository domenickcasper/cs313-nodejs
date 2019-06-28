function getUser() {
	$.get('/getUser', function(data, status) {
		document.getElementById.innerhtml = (JSON.stringify(data));
	})	
}