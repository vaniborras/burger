// Import MySQL connection.
var connection = require("../config/connection.js");

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    };
    console.log('connected as id ' + connection.threadId);
});


var orm = {

    selectAll: function(callback) {

        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    insertOne: function(burger_name, callback){

        connection.query('INSERT INTO burgers SET ?', {
            burger_name: burger_name,
            devoured: false
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    updateOne: function(burgerID, callback){

        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, result) {
            if (err) throw err;
            callback(result);
        });

    }

};


module.exports = orm;