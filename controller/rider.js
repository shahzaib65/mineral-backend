const bcrypt = require("bcryptjs")
const model = require("../model/rider");

const createRider = async(req,res)=>{
    try {
        
    let check = await model.findOne({user_account: req.body.user_account});
        if(check){
            res.status(400).json({error: true,message: "Sorry account is  already exist"})
        }else{
            const salt = await bcrypt.genSalt(10);
            const securePass = await bcrypt.hash(req.body.user_account_password,salt)

            const data = await model.create({
                user_account: req.body.user_account,
                user_account_password: securePass
            });
            res.status(200).json({error: false,message: data})
        }

    } catch (error) {
        res.status(500).json({error:true,message: error.message });
    }

}
const fetchRider = async(req,res)=>{
    try {

        const data = await model.find();
        res.status(200).json({error: false,riders: data});
        
    } catch (error) {
        res.status(500).json({error: true,message: error.message});
    }
}
const updateRider = async(req,res)=>{
     const {id} = req.params;
    try {
       const data = await model.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({error: false,rider: data});

    } catch (error) {
        res.status(500).json({error: true,message: error.message});
    }
}
const deleteRider = async(req,res)=>{
     try {
      const { id } = req.params;
      const user = await model.findByIdAndDelete(id);
      if (!user) {
        return res.status(400).json({error: true,message: "Rider not found"});
      }
      res.status(200).json({error: false,message: "Rider deleted successfully"});
    } catch (error) {
      res.status(400).send({error: true,message: error.message})
    }
}

module.exports = {
    createRider,
    fetchRider,
    updateRider,
    deleteRider
}