var fs = require('fs');
var content = process.argv[2];

fs.readFile(content, 'utf8', function(err, data) {
	var count = data.split('\n').length - 1; 
	console.log(count);
});