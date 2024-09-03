const UserModel = require("../../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function userLoginController(req, res) {
    try {
        const { email, password } = req.body;
        if (!email) {
            throw new Error('Please provide email');
        }
        if (!password) {
            throw new Error('Please provide password');
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        console.log("comparePassword", comparePassword);
        if (comparePassword) {
            const tokenData = {
                user: { id: user._id, email: user.email } // Include user ID in the token
            };
            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '7d' });

            const tokenOption = {
                httpOnly: true,
                secure: true
            };
            res.cookie("token", token, tokenOption).json({
                message: "Login Successfully",
                data: token,
                success: true,
                error: false
            });
            console.log(token);
        } else {
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        console.error(error);
        res.status(401).json({ // Change status to 401 for unauthorized
            success: false,
            data: null,
            error: true,
            message: error.message || "Unauthorized"
        });
    }
}

module.exports = userLoginController;