// const express = require('express')
// const router = express.Router()
// const { CollectionModel } = require('../db/schema')

// router.get('/', async (req, res) => {
//     // Try catch blocks allow us to catch potential error messages
//     try {
//       // Find all users
//       const collections = await CollectionModel.find({})
//       // Send JSON of all Collections
//       res.json(collections)
//     } catch (err) {
//       res.send(err)
//     }
//   })

//   router.post('/', (req, res) => {
//     const newCollection = new Collection(req.body.Collection)
//     newCollection.save().then((collection) => {
//       res.json(collection)
//     }).catch(console.log)
//   })



// module.exports = router;

const express = require('express')
const router = express.Router()
const { CollectionModel } = require('../db/schema')

router.get('/', async (req, res) => {
  // Try catch blocks allow us to catch potential error messages
  try {
    // Find all users
    console.log('in here')
    const users = await CollectionModel.find({})
    // Send JSON of all users
    
    res.json(users)
  } catch (err) {
    console.log(err)
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    // Find a user by the route id
    const user = await CollectionModel.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = new CollectionModel(req.body.user)
    const saved = await newUser.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})

router.delete('/:id', async (req, res) => {
  // Find the user
  const user = await CollectionModel.findById(req.params.id)
  // Find the specific user and remove it from the array
  user.remove()
  // Save the updated user
  const saved = await user.save()
  // Send the user object
  console.log(saved)
  res.json(saved)
})

// UPDATE route
router.put('/:id', (request, response) => {
  
    // GRAB the user ID from the parameters
    const id = request.params.id
  
    // GRAB the updated user info from the request body
    const updatedUser = request.body
  
    // Use Mongoose to find the user by ID and update it with the 
    // new user info. Be sure to include the {new: true} option as your
    // third parameter
    CollectionModel.findByIdAndUpdate(id, updatedUser, { new: true })
        .then(() => {
            // THEN once the new user info has been saved,
            // redirect to that user's SHOW page
            response.redirect(`/users/${id}`)
        })
        .catch((error) => {
            console.log(error)
        })
  })

  // EDIT route
router.get('/:userId/edit', (request, response) => {
  
    // GRAB the user ID from the parameters
    const userId = request.params.userId
  
    // FIND the user by ID using the CollectionModel
    CollectionModel.findById(userId)
        .then((user) => {
            // THEN once the user has been returned from
            // the database, RENDER a form containing the current
            // user information
            response.render('users/edit', {
                user: user
            })
        })
        .catch((error) => {
            console.log(error)
        })
  })

module.exports = router