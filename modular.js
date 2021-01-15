var modulo = require('./modules');

var dossier = process.argv[2];
var exten = process.argv[3];

modulo(dossier,exten, (err, listo)=>{
    if(err) return console.log(err)
    listo.forEach(e=>{console.log(e)})
})


/*
const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
    return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
    console.log(file)
    })
})
*/