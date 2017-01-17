
var http = require('http');
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var User = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
});

// checking if password is valid
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = {
    schema: User,
    model: mongoose.model('User', User),
    registry: {
        urlTemplates: {
            "self": "http://127.0.0.1:3000/user/{id}",
            "relationship": "http://127.0.0.1:3000/user/{ownerId}/relationships/{path}"
        }
    }
};