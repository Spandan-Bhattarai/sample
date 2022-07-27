var fs = require('fs');
 
// fs.readFile('custom2.txt', 'utf-8', function(err, data) {
//     if (err) throw err;
 
//     var newValue = data.replace("asdfgh", 'name');
 
//     fs.writeFile('custom2.txt', newValue, 'utf-8', function(err, data) {
//         if (err) throw err;
//         console.log('Done!');
//     })
// })

fs.writeFileSync("./custom2.txt", "asdfgh", "hello world")