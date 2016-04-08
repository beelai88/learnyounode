var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var count = buffer.toString().split('\n').length - 1; 
console.log(count);