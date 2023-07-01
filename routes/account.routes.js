const express = require('express')
const router = express.Router()
const accountController = require('../controllers/account.controller')

router.get('/getAllAccounts', accountController.getAllAccounts)
router.get('/getAccount/:id', accountController.getAccountByID)

router.post('/createNewAccount', accountController.createNewAccount)
router.put('/updateAccount', accountController.updateAccount)
router.delete('/deleteAccount', accountController.deleteAccount)

module.exports = router