const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')

router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
      // Find all users
      const users = await UserModel.find({})
      // Send JSON of all users
      res.json(users)
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/', (req, res) => {
    const newUser = new User(req.body.user)
    newUser.save().then((user) => {
      res.json(user)
    }).catch(console.log)
  })

module.exports = router;