var fs = require('fs');
var path = require('path');

inPath = process.argv[2];
ext = '.' + process.argv[3];

filterFiles = function(err, files) {
		if (err) throw err;
		for (i=0; i<files.length; ++i) {
			file = files[i];
			if (path.extname(file) == ext) {
				console.log(file);
			}
		}
	}

fs.readdir(inPath, filterFiles);

