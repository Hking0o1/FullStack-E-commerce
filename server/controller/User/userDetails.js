const UserModel = require("../../models/UserModel");

async function userDetails(req, res) {
    try{
        const user = await UserModel.findById(req.userId);
        res.status(200).json({ 
            data:user,
            success: true,
            message: "User details fetched successfully",
            error:false})
    }catch(err){
        res.status(400).json({
            message: err.message || "Error fetching user details",
            error: true,
            success: false
        })
    }
    
}

module.exports = userDetails;