var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableName, colName, burgerName, cb){
        var queryString = "INSERT INTO ??(??) VALUES ?";
        connection.query(queryString, [tableName, colName, burgerName], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableName, devouredCol, devouredStatus, idCol, idValue, cb){
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [tableName, devouredCol, devouredStatus, idCol, idValue], function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;