//nodejs => server side js
//chrome v8 

//moduler 
//inbuilt, third party & own modules(files)

//export
//=> module.exports = moduleName

//import
//=> require('moduleName')


//http server => for api => for db interaction


let express = require("express")
var bodyParser = require('body-parser')
var cors = require('cors')




let app = express()
app.use(cors())

app.use(bodyParser.json())


//routes or endpoints(api)


app.get('/home', (req, res)=>{
    //getting data from server
    res.send("GET : home ")
})


app.post('/home', (req, res)=>{
    console.log(req.body)
    let {num1, num2} = req.body
    let result = parseInt(num1) + parseInt(num2)
    res.send({result})
    //sending data to the server
})


app.post('/add', (req, res)=>{
    let {num1, num2} = req.body
    let result = parseInt(num1) + parseInt(num2)
    res.send({result})
})


app.post('/mul', (req, res)=>{
    let {num1, num2} = req.body
    let result = parseInt(num1) * parseInt(num2)
    res.send({result})
})


app.post('/minus', (req, res)=>{
    let {num1, num2} = req.body
    let result = parseInt(num1) - parseInt(num2)
    res.send({result})
})

app.post('/div', (req, res)=>{
    let {num1, num2} = req.body
    let result = parseInt(num1) / parseInt(num2)
    res.send({result})
})

app.post('/mod', (req, res)=>{
    let {num1, num2} = req.body
    let result = parseInt(num1) % parseInt(num2)
    res.send({result})
})

app.listen(8080, ()=>{
    console.log("server is running")
})


//localhost
//127.0.0.1