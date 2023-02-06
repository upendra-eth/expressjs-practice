const express = require("express");
const app = express();

app.get("/",(req,res)=> {
    res.send("You don't know, What you want to get ");
});

app.listen(3000,() => {
    console.log("serer start at port 3000");
})