const { User } = require("../Model/user")


const check=async (req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        console.log(user);

        if (user){
            return  res.status(400).json({ message: "User already exist" });
        }
        try{
            const registeredUser=await User.create(req.body);
            console.log(registeredUser);
            if (!registeredUser){
                return  res.status(400).json({ message: "Resource not found2" });
                
            }
            return  res.status(200).json({ message: "Success" ,data:registeredUser});

        }catch(error){
            console.log(error);
            return res.status(400).json({ message: "Resource not found3" });


        }
    }
    catch(error){
        console.log(error);
        return res.status(400).json({ message: "Resource not found4" });
    }

   
}

module.exports={
    check
}