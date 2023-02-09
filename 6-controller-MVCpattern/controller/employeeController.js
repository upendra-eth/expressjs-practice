const Employee = require("../models/employeeModel");

const insertEmployee = async(req,res)=> {

    try {

      console.log("here is your function: ", req.body);

      const employee = Employee ({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        password:req.body.password,
      });

      const result = await employee.save(); 
      console.log("Registration has been successful."+result)

      res.send("Registration has been successful."+result);
      
        
    } catch (error) {

        console.log(error.message)
        
    }


}

module.exports={
  insertEmployee
}