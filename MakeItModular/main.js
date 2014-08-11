var module = require('./modFilteredLs')

var dirName = process.argv[2]
var extName = process.argv[3]

print2Console = function(err, data) {
	if (err) {
		throw err;
	}
	for (i=0; i<data.length; ++i) {
		console.log(data[i]);
	}
}

module(dirName, extName, print2Console);