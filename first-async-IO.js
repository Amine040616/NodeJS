var fs = require ('fs')

fs.readFile(process.argv[2], 'utf-8', (err, data)=>{
    if(err)console.log("Il y'a une erreur : ${err}")
    console.log( data.split('\n').length-1);
})
