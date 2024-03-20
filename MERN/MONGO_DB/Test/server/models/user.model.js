const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;
