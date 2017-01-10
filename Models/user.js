
var http = require('http');
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var User = new Schema({
    name: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    admin: Boolean,
    vehicles: [{type: ObjectId, ref: 'Vehicle'}],
    rides: [{type: ObjectId, ref: 'Ride'}]
});

