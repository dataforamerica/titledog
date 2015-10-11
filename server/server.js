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
mongoose.connect('mongodb://localhost:10657/titledog');

//I guess this defines the model
var GeoDetail = mongoose.model('GeoDetail', {fips: String, searchable_detail: String});

//CRUD methods
app.get("/geodetail/", function (req, res) {
    GeoDetail.find(function (err, geodetails) {
        res.send(geodetails);
    })
});

app.post("/geodetail/add/", function(req, res) {
    var geodetail = new GeoDetail(req.body.geodetail);
    geodetail.save(function (err) {
        res.send();
    })
});

app.listen(3000);