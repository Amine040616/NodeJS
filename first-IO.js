var fs = require('fs');

const retour = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(retour-1)