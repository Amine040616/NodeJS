var fs = require('fs');
var path = require('path');

var dossier = process.argv[2];
var exten = process.argv[3];

module.exports = function clbck(onefunction){
fs.readdir(dossier, 'utf-8', (err, list)=>{
    if (err) console.log(err)
    list.filter(el => path.extname(el) === exten && console.log(el))
    

    clbck(null, list)
})
}