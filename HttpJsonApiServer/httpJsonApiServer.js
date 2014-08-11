var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var routes = {
	'/api/parsetime' : function(parsedUrl) {
		var date = new Date(parsedUrl.query.iso);
		return {
			"hour" : date.getHours(),
			"minute" : date.getMinutes(),
			"second" : date.getSeconds()
		};
	}, 
	'/api/unixtime' : function(parsedUrl) {
		return {
			"unixtime" : (new Date(parsedUrl.query.iso)).getTime()
		};
	}
};

var server = http.createServer(function(request, response) {
	if (request.method != 'GET') {
		return response.end('send me a GET\n');
	}
	var parsedUrl = url.parse(request.url, true);
	var returnVal = routes[parsedUrl.pathname];

	if (returnVal) {
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.end(JSON.stringify(returnVal(parsedUrl)));
	} else {
		response.writeHead(404);
		response.end();
	}
});
server.listen(port);
