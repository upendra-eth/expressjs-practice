const express = require("express")
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res) => {
    console.log("Here")
    // res.status(500).send("hi")
    // res.send("hi")
    // res.status(500).json({message:"error"})
    // res.json({message:"error"}).download("server.js")
    // res.download("server.js")
    res.render("index",{text21:"yes"})
})

const userRouter = require("./routes/users")

app.use("/users",userRouter)
// app.use("/")



app.listen(3000)