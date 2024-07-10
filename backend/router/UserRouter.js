const userRouter = require('express').Router();
const getAllUsers = require('../controller/UserController')
const getStoreDetail = require('../controller/UserController')


userRouter.get('/getData', getAllUsers.getAllUsers);
userRouter.get('/getStoreDetail', getStoreDetail.getStoreDetail);


module.exports = userRouter;