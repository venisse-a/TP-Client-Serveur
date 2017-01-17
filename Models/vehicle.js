
var http = require('http');
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var Vehicle = new Schema({

    id: {type: Number, required: true, unique: true},
    group_id: {type: Number, unique: true},
    user: {type: ObjectId, ref: 'User', required: true},
    position: {type: String, required:true}
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