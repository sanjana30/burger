var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(colName, burgerName, cb){
        orm.updateOne("burgers", colName, burgerName, function(res){
            cb(res);
        });
    },
    updateOne: function(devouredCol, devouredStatus, idCol, idValue, cb){
        orm.updateOne("burgers", devouredCol, devouredStatus, idCol, idValue, function(res){
            cb(res);
        });
    }
};

module.exports = burger;