const UserModel = require('../models/UserModel');

const UploadProductPermission = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    return user && user.role === 'ADMIN';
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = UploadProductPermission;