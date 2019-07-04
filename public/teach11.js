function searchIt() {
	var movie = $("#movie").val();
	var url = 'http://www.omdbapi.com/?apikey=72422d24&t='
	var movieurl = url+movie;
	$.get(movieurl, function(data, status) {
		var button = "<input type = 'button' onclick = 'viewDetails(this)' value = 'View Details' name=" + data.imdbID + ">";
		var html = $("#list").val();
		html += "<p>" + data.Title + "<br>" + data.Plot + "<br>" + data.Rated + "</p>" + button;
		console.log(html);
		//html += $('#list').html();
		document.getElementById('list').innerHTML += html;
	})
}

	function viewDetails(button) {
		console.log(button.getAttribute("name"));
	}