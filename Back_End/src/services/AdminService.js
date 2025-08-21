const AdminModel = require('../models/AdminModel')
const UserModel = require('../models/UserModel')
const mongoose = require('mongoose')

const getAllUsersService = async() =>{
    try {
        const users = await UserModel.find({ role: 'user' }).select('-password'); // Exclude password field
        return users;
      } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
      }
}

const getAllDriversService = async() =>{
    try {
        const drivers = await UserModel.find({ role: 'driver' }).select('-password'); // Exclude password field
        return drivers;
      } catch (error) {
        throw new Error('Error fetching drivers: ' + error.message);
      }
}

const suspendUserService = async(userId) =>{
    try {
        const user = await UserModel.findByIdAndUpdate(
          userId,
          { isSuspended: true },
          { new: true }
        );
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        throw new Error('Error suspending user: ' + error.message);
      }
}

const approveDriverService = async(driverId) =>{
    try {
        const driver = await UserModel.findByIdAndUpdate(
          driverId,
          { isApproved: true },
          { new: true }
        );
        if (!driver) {
          throw new Error('Driver not found');
        }
        return driver;
      } catch (error) {
        throw new Error('Error approving driver: ' + error.message);
      }
    
}

module.exports = {
    getAllUsersService,
    getAllDriversService,
    suspendUserService,
    approveDriverService
}