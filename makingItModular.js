var myMod = require('./makingItModularmodule')

var dir = process.argv[2];
var ext = process.argv[3];

myMod(dir, ext, function(err, list) {
	if (err) {
		return console.error('error: ', err); 
	} else {
		list.forEach(function(file){
			console.log(file);
		})
	}
})