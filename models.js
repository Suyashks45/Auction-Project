//models.js

const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    contactNumber: String,
    email: String,
}));

const ItemCategory = mongoose.model('ItemCategory', new mongoose.Schema({
    name: String,
    timeRemaining: String,
    startingTime: Date,
    state: String,
}));

const Product = mongoose.model('Product', new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
}));

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// const User = mongoose.model('User', UserSchema);

module.exports = { User };
module.exports = { User, ItemCategory, Product };
