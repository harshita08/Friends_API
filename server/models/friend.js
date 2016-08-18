var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	name: String,
	city: String,
	age: Number
})

mongoose.model('Friend', FriendSchema);
