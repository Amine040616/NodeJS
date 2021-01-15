
var http = require('http')
var concatStrem = require ('concat-stream');

var allData = [];
var beta = 0;

function printing (){
    for(let i=0; i<3; i++){

        console.log(allData[i]);

    }
}


function getting (){
    for(let i=0; i<3; i++){
        http.get(process.argv[2+i], (res)=>{
            
            res.pipe(concatStrem(( data)=>{
                
                allData[i] = data.toString();
                beta++
               // console.log(allData[i]);
                if (beta==3){
                    printing ();
                }

            }))
        })
    
    }
}

getting ();


/*
'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
*/