let express = require("express")
let bodyParser = require("body-parser")
let app = express()

let controller = require('./controller')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get recibe 2 parametros, un string que es el url 
// y un handler cuando se accesa a ese string
app.get('/', function (request, response) {
    response.send('HOLA TERRICOLA')
})
app.get('/adios', function (request, response) {
    response.send('ADIOS MUNDO CRUEL')
})
app.get('/ayiura', function (request, response) {
    response.send('AYIUUURAAA')
})
app.get('/json', function (request, response) {
    let objJson = {
        hola: 'amigos',
        como: ['les', 'ha', 'ido'],
        que: {
            cuenta: 'la mala',
            vida: '?'
        }
    }
    response.send(objJson)
})


// PRIMER GET A BASE DE DATOS

//mostrar
app.get('/personas', controller.getPersonas)
//insertar
app.post('/personas', controller.insertPersona)
//editar
app.post('/personas', controller.editarPersona)
//eliminar
app.post('/personas', controller.eliminarPersona)

// app.listen recibe 2 parametros, un número que es el puerto donde escucharé
// y una función callback que ejecutará cuando estoy corriendo
app.listen(3000, function () {
     console.log('Example app listening on port 3000!')
})