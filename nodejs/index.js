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
let app = express()

//routes or endpoints(api)

app.get('/', (req, res)=>{
    res.send("this is root route /")
})


app.get('/about', (req, res)=>{
    res.send("this is about route")
})

app.get('/services', (req, res)=>{
    res.send("this is service route")
})


app.listen(8080, ()=>{
    console.log("server is running")
})