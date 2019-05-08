function getBike(where,callback){
    var mc = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/';

    mc.connect(url, function(err,db){
        if(err) throw err;
        var dbo = db.db("Moto");
        
        dbo.collection('bikes')
        .find({})
        .toArray(function(err,result){
            if(err) throw err;
            callback(result);
            db.close();
        })
    })
    
}

var exports = module.exports = {};
exports.getBike = getBike;