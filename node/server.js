const { application, json } = require("express")
const http = require("http")
const { URL } = require("url");

/* 
HTTP VERBS/METHODS

GET -Read
post  -Create
PUT / PATCH  -Update  
DELETE  -Delete
 */

const server = http.createServer((req,res) => {
    // console.log(req.url)
    
    res.writeHead(200,{
        'Content-Type': 'application/json'
    });
    // console.log(req.headers.host + req.url)
    // let url_obj1 = new URL(req.headers.host + req.url)
    // console.log(url_obj1)
    // id = url_obj1.searchParams.get("id")
    // console.log({ id });
    // return;
    // let url = new URL()


    if(req.url=="/about" && req.method == "GET")
    {
        res.write(JSON.stringify(
            {msg: "welcome to about"}
        ))
        return res.end();
    }
    else if(req.url=="/contact" && req.method == "POST")
    {
        res.write(JSON.stringify(
            {msg: "welcome to contact page"}
        ))
        return res.end();
    }

    console.log("request accpeted") //shown on server side
    
    res.write(JSON.stringify(
        {msg: "request accepted"}
    ))
// console.log(req)
    res.end();
})

server.listen(8000,() => {
    console.log("listening")
})