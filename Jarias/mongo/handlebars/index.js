let express = require('express')
let app = express()
const path = require('path')
let controller = require('./controller')




//Blog 

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/blog/:num', function (req, res ){

    res.render('blog', {
        title: 'Blog individual, página de prueba ',
        subtitle:'Esto es un subtítulo ' +  req.params.num,
        content:'Este contenido es diferente '+'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil quam ipsam, repudiandae mollitia, ex quibusdam magnam dolores dicta placeat nam perferendis animi corporis sequi, reprehenderit itaque voluptates neque voluptatum laborum perspiciatis ut! Dicta, quidem quibusdam qui rerum explicabo consequatur corporis, corrupti laudantium reiciendis ullam asperiores tenetur est repudiandae saepe?'
    })
})
app.get('/blog/', function (req, res ){

    res.render('blogPrin')
    })
    


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Página principal, esto está muy cabrón!',
        Bottom: [
            {
                name: 'Memo',
                age: 26,
                hasPets: true,
                pets: ['perro', 'gato']
            },
            {
                name: 'jorge',
                age: 48,
                hasPets: false
            },
            {
                name: 'chava',
                age: 1000,
                hasPets: true,
                pets: ['changuito']
            }
        ]
    })
})


app.listen(3000, function () {console.log('Connected in port 3000')})