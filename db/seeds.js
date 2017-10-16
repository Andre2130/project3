require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { UserModel, AlbumModel, CollectionModel } = require('./schema')

const Andre = new UserModel({
    userName: 'andre_robinson',
    password: 'sauceradio'
  })

const WTC = new AlbumModel({
    name: 'The Saga Continues',
    description: 'Artist: Wu Tang Clan'
})

const soul = new CollectionModel({
    title: 'Soul',
    albums: [WTC]
})

UserModel.remove({})
.then(() => Andre.save())
.then(() => soul.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())
