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
    console.log("I am hitting the url");
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result){
        console.log(result);
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    console.log(req.params.id);
    console.log(req.body.devoured);
    burger.updateOne("devoured", req.body.devoured, "id", req.params.id, function(result){
        
       
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            console.log("updated");
            console.log(result);
            res.status(200).end();
          }
    });
});

module.exports = router;