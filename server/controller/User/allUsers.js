const UserModel = require("../../models/UserModel");

async function allUsers(req, res) {
    try {
        const user = await UserModel.find();
        res.json({
            message: "User details fetched successfully",
            data: user,
            error: false,
            success: true
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || "Error fetching user details",
            error: true,
            success: false
        })
    }

}

module.exports = allUsers;