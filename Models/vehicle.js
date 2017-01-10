/**
 * Created by Tony on 10/01/2017.
 */


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