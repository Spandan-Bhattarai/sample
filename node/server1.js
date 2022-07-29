const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if (req.url == "/custom-html") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const html = fs.readFileSync("./index.html")
        console.log(req.url);
        res.end(html);
    }
    else if (req.url == "/custom.js") {
        const html = fs.readFileSync("./custom.js")
        console.log(req.url);
        res.end(html);
    } 
    else {
        res.write(JSON.stringify({ msg: "404 page not found" }))
        return res.end();
    }
    console.log("accepted");
})
server.listen(8000,()=>{
    console.log("listening");
})