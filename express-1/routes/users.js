const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    console.log("users")
    // res.render()
    // res.send("us")
    res.json({massage:"hellow"})
})

router.get('/new',(req,res)=>{
    console.log("new user")
    res.send("new user")
})

router.post('/',(req,res) => {
    res.send("create user")
})

router.get('/:id',(req,res) =>{
    res.send(`get user with id ${req.params.id}`)
})
router.get('/v1/:id',(req,res) =>{
    console.log(req.user)
    res.send(`get user with id ${req.params.id}`)
})
router.put('/:id',(req,res) =>{
    res.send(`get user with id ${req.params.id}`)
}).delete('/:id',(req,res) =>{
    res.send(`get user with id ${req.params.id}`)
})

const users = [{name:"raja"},{name:"ram"}]

router.param("id",(req,res,next,id)=>{

    req.user=users[id]
    console.log(req.user)
    console.log(id)
    console.log("yes")

    next()

})
module.exports=router

