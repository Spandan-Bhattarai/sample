//read file but this one shows file in form of buffer
const fs=require("fs")
fs.readFile("./custom.txt",
    (err,data) => 
    {
        console.log(data);
    }
)

//converts buffer to text/string and outputs it
fs.readFile("./custom.txt","utf-8",
    (err,data) => 
    {
        console.log(data.toString());
    }
)
fs.readFile("./custom.txt","utf-8",
    (err,data) => 
    {
        console.log(data);
    }
)