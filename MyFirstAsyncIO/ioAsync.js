var fs = require('fs');

fileName = process.argv[2];

function processData(data) {
	tmpArray = data.split('\n');
	numNewLines = tmpArray.length - 1;
	console.log(numNewLines);
}

data = fs.readFile(fileName, 'utf8', function(err, data) {
		if (err) throw err;
		processData(data);
	});

