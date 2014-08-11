var http = require('http');

targetURL = process.argv[2];

http.get(targetURL, function(response) {
	response.setEncoding('utf8');
	/*response.on("data", function(data){
		console.log(data);
	});*/
	response.on('data', console.log);
	response.on('error', console.error);
});
