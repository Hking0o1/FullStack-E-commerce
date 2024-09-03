const UserModel = require("../../models/UserModel");

async function updateUser(req, res) {
    try {
        const sessionUser = req.userId;
        const { userId, name, email, role } = req.body;
        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role })
        };
        const user = await UserModel.findById(sessionUser);

        const updatedUser = await UserModel.findByIdAndUpdate(userId, payload, { new: true });
        return res.status(200).json({
            message: "User updated successfully",
            data: updatedUser,
            error: false,
            success: true
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || "Error fetching user details",
            error: true,
            success: false
        });
    }
}

module.exports = updateUser;