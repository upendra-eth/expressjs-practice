const mongoose = require("mongoose")
const uri = "mongodb://127.0.0.1:27017/company"
mongoose.connect(uri).then(console.log("....................connected..............."));

// .......................................................

const express = require("express");
const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/login',function(req,res){
    res.render("login");

});

app.listen(3000,function(){
    console.log("surver is running at http://localhost:3000")
})
