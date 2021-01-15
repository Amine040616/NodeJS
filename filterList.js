var fs = require('fs')

fs.readdir(process.argv[2], (err, list)=>{
    if(err)console.log("Il y'a une erreur : ${err}")
    console.log(list.filter(el => el.split('.')[1]=='md').join('\n'))
})


//solution proposer par Learnyounode
/*
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
*/