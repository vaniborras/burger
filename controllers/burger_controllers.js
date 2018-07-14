var express = require ("express");
var router = express.Router();

// Import the model (burge.js) to use its database functions.
var burger = require("../models/burger.js");

// Index
router.get('/', function (req, res) {
    res.redirect('/index');
});

//all
router.get('/index', function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// a New Burger
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect('/index');
    });
});

// Devour
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});

// Export routes for server.js to use.
module.exports = router;