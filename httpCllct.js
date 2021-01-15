var http = require("http");
var concatStream = require('concat-stream')

http.get(process.argv[2], (res) => {
    
    res.pipe(concatStream(function (data) { 
        data = data.toString();
        console.log(data.length);
        console.log(data);

    }))
    
    
    
    res.on('err', console.error)
})



/*
'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
    if (err) {
        return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
    }))
})
*/