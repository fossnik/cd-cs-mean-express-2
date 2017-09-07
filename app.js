var express = require('express');
var app = express();

// use that public folder (static middleware)
app.use(express.static('public'));

// redirect from root to /cities
app.get('/', function (request, response) {
	response.redirect(301, '/cities');
});

// route for /cities - do AJAX for html injection
app.get('/cities', function (request, response) {
	var someCities = ["Providence", "Austin", "Melbourne", "Detroit"];

	var list = [];
	someCities.forEach(function(city){
		// html += "INPUT value=" + city;
		console.log(city);
	})

	// $(".form").append(html);
});

// serving up fresh HTML on port 8000
app.listen(8000, function () {
	console.log("Serving up HTML on Port 8000");
});
