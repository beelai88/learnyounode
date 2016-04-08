var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
	var extToPrint = process.argv[3];
	list.forEach(function(file) {
		if(path.extname(file) === "." + extToPrint)
			console.log(file);
	})
})