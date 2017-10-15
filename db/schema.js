const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    name: String,
    discription: String

})

const CollectionSchema = new Schema({
    name: String,
    albums: [AlbumSchema]
})

const UserSchema = new Schema({
    userName: String,
    password: String
   
})

const UserModel = mongoose.model('User', UserSchema)
const AlbumModel = mongoose.model('Album', AlbumSchema)
const CollectionModel = mongoose.model('Collection', CollectionSchema)

module.exports = {
    UserModel: UserModel,
    AlbumModel: AlbumModel,
    CollectionModel: CollectionModel
}