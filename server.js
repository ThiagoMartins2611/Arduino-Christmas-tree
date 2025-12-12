const express = require('express');
const app = express();
const routes = require('express').Router();


app.use(express.static("./public"));


global.valor = 0;


routes.get('/teste/:sensor', (req, res) => {
    const valor = req.params.sensor;
    if (!valor) {
        return res.status(400).send({ error: 'Parametro invalido' });
    }

    console.log(valor)

    global.valor = valor;
    res.status(200).send({ valor });
});


routes.get('/dados', (req, res) => {
    try {
        console.log("Valor global:", global.valor)
        res.status(200).send({ luminosidade: global.valor });
    } catch (error) {
        console.log(error)
    }
  
});

routes.get("/", (req, res)=>{
    res.sendFile("pag.html", {root: "./public"});
})

app.use('/', routes);

app.listen(3000, () => {
    console.log('Aplicação rodando!');
});