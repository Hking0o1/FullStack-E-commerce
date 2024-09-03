const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    profilePic: String,
    role: String
}, {
    timestamps: true
});
userSchema.statics.getAllUsers = async function() {
    return await this.find(); // Returns an array of user documents
};


const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;