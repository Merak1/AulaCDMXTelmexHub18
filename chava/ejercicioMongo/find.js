let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'Telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfuly to server')

    const db = con.db(dbName)

    db.collection('personas')
    .find({})
    .toArray(function (err, data){
        console.log(data)
    })

     // imprima solo un documento para la persona que se llama "Pablo"
     db.collection('personas')
     .findOne({name: 'Pablo'}, function (err, data) {
         console.log("FIND ONE")
         if (err) console.log(err)
         console.log(data)
     })



})