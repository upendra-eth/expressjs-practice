const express = require("express");
const employeeRoutes = express();

const bodyParser = require("body-parser");
const { render } = require("pug");

const employee = require("../controller/employeeController")

employeeRoutes.set('view engine', 'pug');
employeeRoutes.set('views','./views');

employeeRoutes.get('/register', function(req,res){
    res.render("register.pug");
});

employeeRoutes.post('/register', employee.insertEmployee);

module.exports = employeeRoutes;
