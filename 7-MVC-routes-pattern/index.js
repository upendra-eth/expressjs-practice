const mongoose = require("mongoose")
const uri = "mongodb://127.0.0.1:27017/company"
mongoose.connect(uri).then(console.log("....................connected..............."));

// .......................................................

const express = require("express");
const app = express();

//..........................................................

const bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const employee = require("./controller/employeeController")

// ........................................................

const employeeRoute = require("./routes/employeeRoutes")

app.use('/', employeeRoute)


//..........................................................

app.listen(3000,function(){
    console.log("surver is running at http://localhost:3000")
})
