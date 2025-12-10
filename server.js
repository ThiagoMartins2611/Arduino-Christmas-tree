const express = require('express')
app = express()
routes = require('express').Router()


routes.get('/teste/:sensor', (req, res) =>{

    const valor = req.params.sensor
    if(!valor){
        return res.status(400).send({error: 'Parametro ou outro erro no ESP'})
    }

    console.log('valor recebido', valor)
    res.status(200).send({valor});
})

app.use('/', routes)



app.listen(3000, ()=>{
console.log('Aplica¸c~ao rodando!')
})