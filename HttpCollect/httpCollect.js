var http = require('http');
var bl = require('bl');

targetURL = process.argv[2];

http.get(targetURL, function(response) {
	response.setEncoding('utf8');

	response.pipe(bl(function(err, data) {
		if (err)
			return console.error(err);
		console.log(data.toString().length);
		console.log(data.toString());
	}))
});
