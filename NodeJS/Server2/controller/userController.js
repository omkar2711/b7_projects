import { User } from '../model/userModel.js'

const updateUser = async(req,res)=>{

    try{
        let userDetail = req.body;
    
        const result = await User.updateOne({email : userDetail.email} , {$set : {firstName : userDetail.firstName}});
        res.send("User Updated successfully");
    }
    catch(error){
        res.send(error);
    }

}


const deleteUser = async(req,res)=>{
    try{
        let user = req.body;
        user = await User.deleteOne({email : user.email});
        res.send("User Deleted successfully");
    }
    catch(error){
        res.send(error);
    }
}

export {
    updateUser,
    deleteUser
}