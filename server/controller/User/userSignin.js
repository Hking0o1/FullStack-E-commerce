const UserModel = require("../../models/UserModel");
const bcrypt = require("bcryptjs");


async function userSignUPControler(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({email});
    if (user) {
      throw new Error("Email already exists");
    }
    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    if (!hashedPassword) {
      throw new Error("Password hashing failed");
    }

    const payload = {
      ...req.body,
      role : "GENERAL",
      password: hashedPassword,
    };

    const userData = new UserModel(payload);
    const saveData = await userData.save();

    res.status(201).json({
      success: true,
      data: saveData,
      error: false,
      message: "User Registration Successful",
    });
    console.log("User saved successfully");
  } catch (e) {
    res.status(500).json({
      success: false,
      data: null,
      error: true,
      message: e.message || "Internal Server Error",
    });
    console.error(e);
  }
}

module.exports = userSignUPControler;