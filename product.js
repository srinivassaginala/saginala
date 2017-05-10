var mongoose = require('mongoose');
//Defining Schema
var productSchema = mongoose.Schema({


    name: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    com: {
        type: String,
        required: true
    },

    pid: {
        type: String,
        required: true
    },

    cost: {
        type: String,
        required: true
    }
});

var propackage = module.exports = mongoose.model('ProductCollection',productSchema); //Binding schema 

module.exports.addProduct = function(data, callback) {
    propackage.create(data, callback);
}
module.exports.getProductByField = function(ret, callback) {
    propackage.find({name:ret}, callback);
}
module.exports.updateProduct = function(name, data, options, callback) {
    var query = {
        name: name
    };
    var update = {
        name: data.name,
        email: data.model,
        mob: data.com,
        city: data.pid,
        pincode: data.cost
    }
    propackage.findOneAndUpdate(query, update, options, callback);
}
module.exports.removeProduct = function (name, callback) {
    var query = {
        name: name
    };
    propackage.remove(query, callback);
}
module.exports.getDetails = function(callback) {
    propackage.find(callback);
}

