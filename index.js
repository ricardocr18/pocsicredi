const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json())
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.post('/', (req, res) => {

    let watson = req.body.cnpj
    console.log("Informações do Bot: " + watson)
    msg = "Bot recebeu dados da API";

    if (tipo === "x") {
        msg2 = "você está conectado"
    } else {
        msg2 = " você errou mais está conectado"
    }

    
    return res.json(msg)

})

app.listen(port, () => {
    console.log('API no Heroku está ON')
})
