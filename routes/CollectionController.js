const express = require('express')
const router = express.Router()
const { CollectionModel } = require('../db/schema')

router.get('/', async (req, res) => {
    // Try catch blocks allow us to catch potential error messages
    try {
      // Find all users
      const collections = await CollectionModel.find({})
      // Send JSON of all Collections
      res.json(Collections)
    } catch (err) {
      res.send(err)
    }
  })

  router.post('/', (req, res) => {
    const newCollection = new Collection(req.body.Collection)
    newCollection.save().then((collection) => {
      res.json(collection)
    }).catch(console.log)
  })

module.exports = router;