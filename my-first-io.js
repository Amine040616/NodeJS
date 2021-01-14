var fs = require('fs');

//console.log ('donnez un chemin :');


/* fs.readFileSync(process.argv[2], { encoding: 'utf8' }, (err, filo) => {
    
    if(err) console.log ('Erreur', err);
    else 
    console.log (process.argv);
}) */

var filename = process.argv[2];
var buf = fs.readFileSync(filename);
var str = buf.toString().split('\n').length;
console.log (--str);

//'./faitchier.txt'


/* var K = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(--K) */