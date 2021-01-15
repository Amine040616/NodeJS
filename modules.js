var fs = require('fs');
var path = require('path');


module.exports = (dossier, exten, onefunction)=>{
    //exten = `.${exten}`;
fs.readdir(dossier, (err, list)=>{
    if (err) return onefunction(err)
    const filterer = list.filter(el => path.extname(el) === '.' + exten);
    return onefunction(null, filterer)
})
}



/*

const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
    if (err) {
        return callback(err)
    }

    list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
    })
}

*/