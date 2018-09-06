var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hsbObject = {
            burgers: data
        }
        console.log(hsbObject);
        res.render("index", hsbObject);
    });
});

router.post("/api/burgers", function(req, res){

});

router.put("/api/burgers/:id", function(req, res){

});

module.exports = router;