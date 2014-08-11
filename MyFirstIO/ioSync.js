var fs = require('fs');
data = fs.readFileSync(process.argv[2]).toString();
tmpArray = data.split('\n');
numNewLines = tmpArray.length - 1;
console.log(numNewLines);