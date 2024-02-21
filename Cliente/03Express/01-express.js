'use strict'

let express = require('express'),
app=express();
app.use(express.static(__dirname+'/public/'))



app.set('view engine' , 'ejs');
app.set('views', __dirname+'/views/');

app
.get('/', (req,res)=>{
    
    //res.sendFile(`${__dirname}/assets/index.html`)
    res.render("index", {titulo: "mi título dinámico"})
})

.get('/contacto', (req,res)=>{
    
    //res.sendFile(`${__dirname}/assets/index.html`)
    res.render('contacto', {tituloContacto: "Estamos en contacto manera dinámica"})
})

.use((req,res)=>{
    res.status(404).render('404',{
        titulo:"Error 404",
        descripcion:"Page Not Found"
    })
})


.listen(3000)

console.log('Iniciando Express en el puerto 3000')