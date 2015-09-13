var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());


//mongodb setup
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/jetbrains');


var Product = mongoose.model('Product', {name: String});

var product = new Product({name: 'WebStorm'});
product.save(function (err) {
    if(err) {
        console.log('failed');
    }else{
        console.log('saved');
    }
});

app.get("/", function (req, res) {
    Product.find(function (err, products) {
        res.send(products);
    })
});

app.post("/add", function(req, res) {
    var name = req.body.name;
    var product = new Product({name: name});
    product.save(function (err) {
        res.send();
    })
});

app.listen(3000);