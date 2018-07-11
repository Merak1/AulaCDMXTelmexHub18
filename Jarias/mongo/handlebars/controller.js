

let mongo = require('mongodb')
let client = mongo.MongoClient
let url = "mongodb://localhost:27017"
let dbName = "telmex"



function blog (req, res) {
    res.send('Esta es la entrada númoero: ' + req.params.numero + " del blog")
}



module.exports ={
    blog
}