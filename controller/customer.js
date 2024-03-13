const bcrypt = require("bcryptjs")
const model = require("../model/customer");

const createCustomer = async(req,res)=>{
    try {
        
    let check = await model.findOne({user_account: req.body.user_account});
        if(check){
            res.status(400).json({error: true,message: "Sorry account is  already exist"})
        }else{
            const salt = await bcrypt.genSalt(10);
            const securePass = await bcrypt.hash(req.body.user_account_password,salt)

            const data = await model.create({
                user_account: req.body.user_account,
                user_account_password: securePass,
                name: req.body.name,
                property: req.body.property
            });
            res.status(200).json({error: false,message: data})
        }

    } catch (error) {
        res.status(500).json({error:true,message: error.message });
    }

}
const fetchCustomer = async(req,res)=>{
    try {

        const data = await model.find();
        res.status(200).json({error: false,customers: data});
        
    } catch (error) {
        res.status(500).json({error: true,message: error.message});
    }
}
const updateCustomer = async(req,res)=>{
     const {id} = req.params;
    try {
       const data = await model.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({error: false,customer: data});

    } catch (error) {
        res.status(500).json({error: true,message: error.message});
    }
}
const deleteCustomer = async(req,res)=>{
     try {
      const { id } = req.params;
      const user = await model.findByIdAndDelete(id);
      if (!user) {
        return res.status(400).json({error: true,message: "Customer not found"});
      }
      res.status(200).json({error: false,message: "User deleted successfully"});
    } catch (error) {
      res.status(400).send({error: true,message: error.message})
    }
}

module.exports = {
    createCustomer,
    fetchCustomer,
    updateCustomer,
    deleteCustomer
}