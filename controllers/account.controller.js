const Account = require('../models/account.model')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all accounts
// @route GET /accounts
// @access Private
const getAllAccounts = asyncHandler(async (req, res) => {
    Account
        .find()
        .select('-accPassword')
        .then(accounts => {
            return res.status(200).send(accounts)
        })
        .catch(error => {
            console.log(error);
        })
})

// @desc Get an account by ID
// @route GET /getAccountByID
// @access Private
const getAccountByID = asyncHandler(async (req, res) => {
    Account
        .findById(req.params.id)
        .then(account => {
            return res.status(200).send(account)
        })
        .catch(error => {
            console.log(error);
        })
})

// @desc Get an account by Email
// @route GET /getAccountByEmail
// @access Private
const getAccountByEmail = asyncHandler(async (req, res) => {
    const { email } = req.params;
    Account
        .findOne({ accEmail: email })
        // .select('-accPassword')
        .then(account => {
            if (account) {
                return res.status(200).send(account);
              } else {
                return res.status(404).json({ message: 'Account not found. Please try again' });
              }
        })
        .catch(error => {
            console.log(error);
            return res.status(500).json(error);
        })
})

// @desc Create a new account
// @route POST /accounts
// @access Private
const createNewAccount = asyncHandler(async (req, res) => {
    const { accUsername, accEmail, accPassword } = req.body

    // Confirm data
    if (!accUsername || !accEmail || !accPassword) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username
    const duplicate = await Account.findOne({ accUsername }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hash password 
    // const hashedPwd = await bcrypt.hash(accPassword, 10) // salt rounds
    const hashedPwd = accPassword

    const accountObject = { accUsername, accEmail, "accPassword": hashedPwd }

    // Create and store new account 
    const account = await Account.create(accountObject)

    if (account) { //created 
        return res.status(201).json({ message: `New account ${accUsername} created` })
    } else {
        res.status(400).json({ message: 'Invalid account data received' })
    }
})


// @desc Update an account
// @route PUT /accounts
// @access Private
const updateAccount = asyncHandler(async (req, res) => {
    const { accEmail, newPassword, confirmedPassword } = req.body
    const { id } = req.query

    // Confirm data
    if (!accEmail, !newPassword, !confirmedPassword) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    if (newPassword != confirmedPassword) {
        return res.status(400).json({ message: 'Password must be the same' })
    }

    const accountById = await Account.findById(id).exec()

    if (!accountById) {
        return res.status(400).json({ message: 'Account not found' })
    }

    // Check for duplicate
    const duplicate = await Account.findOne({ accEmail }).lean().exec()
    // Allow updates to the original account
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate Email' })
    }

    // Check for current password
    // if (!bcrypt.compare(accPassword, accountById?.accPassword)) {
    //     console.log('checked old and new pass');
    //     return res.status(400).json({ message: 'Password is wrong' })
    // }

    accountById.accEmail = accEmail
    if (newPassword) {
        // Hash password
        // Account.accPassword = await bcrypt.hash(accPassword, 10) // salt rounds
        accountById.accPassword = newPassword
    }

    const updateAccount = await accountById.save()

    res.json({ message: `${updateAccount.accUsername} updated` })
})

// @desc Delete an account
// @route DELETE /accounts
// @access Private
const deleteAccount = asyncHandler(async (req, res) => {
    const { id } = req.query

    if (!id) {
        return res.status(400).json({ message: 'Account ID is required' })
    }

    const deleteAccount = await Account.findById(id).exec()

    if (!deleteAccount) {
        return res.status(400).json({ message: 'Account not found' })
    }

    const result = await Account.findByIdAndDelete(id)

    const message = `Username ${result.accUsername} with ID ${result._id} deleted`
    res.json(message)
})

module.exports = {
    getAllAccounts,
    getAccountByID,
    getAccountByEmail,
    createNewAccount,
    updateAccount,
    deleteAccount
}