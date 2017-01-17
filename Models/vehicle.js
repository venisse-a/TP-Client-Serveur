
var http = require('http');
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Vehicle = new Schema({

    ref: {type:String, required: true},
    user: {type: ObjectId, ref: 'User', required: true},
    start: {type: String},
    end: {type: String},
    start_time: { type: Date }
});

module.exports = {
    schema: Vehicle,
    model: mongoose.model('Vehicle', Vehicle),
    registry: {
        urlTemplates: {
            "self": "http://127.0.0.1:3000/vehicle/{id}",
            "relationship": "http://127.0.0.1:3000/vehicle/{ownerId}/relationships/{path}"
        }
    }
};