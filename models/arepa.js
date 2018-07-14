var orm =require('../config/orm.js');

var arepa = {
    all: function(cb){
        orm.all('arepa', function(res){
            cb(res);
        })
    }
}

module.exports = arepa;