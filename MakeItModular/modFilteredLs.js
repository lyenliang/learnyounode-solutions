var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extName, callback) {
		extName = '.' + extName
		fs.readdir(dirName, function(err, files) {
				if (err) 
					return callback(err);
				var data = new Array();
				for (i=0; i<files.length; ++i) {
					
					
					if (path.extname(files[i]) == extName) {
						// add it to the data of the callback function
						data.push(files[i]);
						
					}
				}
				callback(null, data);
			});
	}
