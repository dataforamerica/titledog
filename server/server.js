/**
 * Created by vincent on 10/4/15.
 */
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());


//mongodb setup
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/titledog', function (error){
    if (error) {
        console.log(error);
    }
});
//var userSchema = new mongoose.Schema({name:String});

var userSchema = new mongoose.Schema({location:String});

//I guess this defines the model
var Geolist = mongoose.model('Geolist', userSchema);

//CRUD methods
app.get("/:location", function (req, res) {
    var loc = '^' + req.params.location;
    Geolist.find({location : new RegExp(loc, 'i')  },function (err, geolists) {
        res.send(geolists);
    })
});

app.post("/geodetail/add/", function(req, res) {
    var geodetail = new GeoDetail(req.body.geodetail);
    geodetail.save(function (err) {
        res.send();
    })
});

app.listen(3000);