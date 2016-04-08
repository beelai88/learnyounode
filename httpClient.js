var http = require('http');

http.get(process.argv[2], function(response){
	response.on('data', console.log)
	response.on('error', console.error)
	response.setEncoding('utf8'); 
})