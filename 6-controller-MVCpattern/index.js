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

app.set('view engine','pug');
app.set('views','./views');

app.get('/register',function(req,res){
    res.render("register");

});

app.post('/register', employee.insertEmployee);

app.listen(3000,function(){
    console.log("surver is running at http://localhost:3000")
})
