let express = require("express")

let app = express()

app.get('/',function(req,res){
    res.send('Página principal')
})

app.get('/noroi',function(req,res){
    
    let obJson={
        hola:'amigo',
        como:['les','ha','ido'],
        que:{
            cuenta:'la mala',
            vida:'?'
        }
    }
    res.send(obJson)
})

app.get('/telmex/:quien',function(req,res){
    res.send('Hola señor '+ req.params.quien)
})
app.get('/carta-de/:remitente/para/:destinatario',function(req,res){
    res.send(`Hola señor ${req.params.remitente} atte: ${destinatario}`)
})

app.get('')



app.listen(3000, ( ) => console.log('La aplicación está escuchando en le puerto 3000'))