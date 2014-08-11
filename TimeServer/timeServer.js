var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

function getDate() {
	date = new Date();
	// %F  YYYY-MM-DD
	// %R  hh:mm
	return strftime('%F %R', date);
}

var server = net.createServer(function(socket) {
	var dateTime = getDate();
	socket.end(dateTime);
});
server.listen(port);