
var http = require('http');
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Ride = new Schema({

    id: {type: Number, required: true, unique: true},
    start: {type: String, required: true},
    end: {type: String, required: true},
    user: {type: ObjectId, ref: 'User', required: true},
    vehicles: {type: ObjectId, ref: 'Vehicle'},
    group_vehicles: {type: Number, required: true}

});