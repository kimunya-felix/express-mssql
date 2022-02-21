const express = require("express");
const router = express.Router()
const userContoller = require('../controllers/userController')

router.get('/', userContoller.getUsers)
router.get('/:id', userContoller.getUser)
router.post('/', userContoller.addUser)
router.put('/:id', userContoller.updateUser)
router.delete('/:id', userContoller.deleteUser)

module.exports=router