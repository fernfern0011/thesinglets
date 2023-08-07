const express = require('express')
const router = express.Router()
const accountController = require('../controllers/account.controller')

//GET Account
router.get('/getAllAccounts', accountController.getAllAccounts)
router.get('/getAccount/:id', accountController.getAccountByID)
router.get('/login/:email/:password', accountController.login)

router.post('/createNewAccount', accountController.createNewAccount)
router.put('/updateAccount/:id', accountController.updateAccountByID)
router.delete('/deleteAccount/:id', accountController.deleteAccountByID)

module.exports = router