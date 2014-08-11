var fs = require('fs');
var http = require('http');

var port = Number(process.argv[2]);
var path = process.argv[3];

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'content-type': 'text/plain' });
	var fileStream = fs.createReadStream(path);
	fileStream.pipe(response);
});
server.listen(port);

