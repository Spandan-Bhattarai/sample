const express = require('express')
const app = express()

// global middleware


app.use((req, res, next) => {
  console.log("middlewear")
  next()
})


      // var bodyParser = require('body-parser')
      // // parse application/x-www-form-urlencoded
      // app.use(bodyParser.urlencoded({ extended: false }))

      // // parse application/json
      // app.use(bodyParser.json())

//local middleware

//buildt-in middleware
app.use(express.json())



app.get('/', function (req, res) {
  res.send('get')
  console.log('get')  //writes get in server side
})

app.post('/', function (req, res) 
  {
    // console.log(req)
    console.log(req.body)  //prints content of body in console to server side
    res.send('post')
  })

app.listen(8000)