var http = require('http');
var bl = require('bl');

var count = 0;
var results = ["", "", ""];

var argn = 3;
var url = ["", "", ""];

function printResults(results) {
	for (i=0; i<argn; ++i) {
		console.log(results[i]);
	}
}

function collectData(urlIdx, url) {
	//console.log(url);
	http.get(url[urlIdx], function(response) {
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data) {
			if (err)
				return console.error(err);

			count ++;
			results[urlIdx] = data.toString();

			if (count == 3) {
				// we've finished reading 3 URLs
				printResults(results)
			}
		}))

	});
}

// read input parameters
for (i=0; i<argn; ++i) {
	url[i] = process.argv[i+2];
}

for (i=0; i<argn; ++i) {
	collectData(i, url);
}
