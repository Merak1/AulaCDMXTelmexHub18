let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'Telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfuly to server')

    const db = con.db(dbName)

    // db.collection('personas').remove({})

    db.collection('personas').insert({
        name: 'Miguel',
        apellido: 'Quevedo',
        edad: '30',
        mascotas: ['jellyfish','langosta','cangrejo']
    }, function (err, data){
        console.log(data)
    })

    db.collection('personas').insert({
        name: 'Isacc',
        apellido: 'Newton',
        edad: '25',
        mascotas: ['coala','canguro','ballena']
    }, function (err, data){
        console.log(data)
    })

    db.collection('personas').insert({
        name: 'Oscar',
        apellido: 'Leon',
        edad: '15',
        mascotas: ['calamar','ganso','guacamaya']
    }, function (err, data){
        console.log(data)
    })

    db.collection('personas').insert({
        name: 'Camelia',
        apellido: 'Tejana',
        edad: '60',
        mascotas: ['escorpion','gavilan','oso']
    }, function (err, data){
        console.log(data)
    })

    db.collection('personas').insert({
        name: 'Lola',
        apellido: 'Trailera',
        edad: '60',
        mascotas: ['perro','gato','perico']
    }, function (err, data){
        console.log(data)
    })

})

