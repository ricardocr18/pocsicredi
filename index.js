const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json())
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.post('/sicrede', (req, res) => {

    // let watson = req.body.cnpj
    // console.log("Informações do Bot: " + watson)
    // msg = "Bot recebeu dados da API";

    let arr = [
        {
            "ns": "BCKD20000700G",
            "modelo": "Modelo DVR",
            "data": "01102020",
            "img": "https://imgur.com/9yYhjcA"
        },
        {
            "ns": "BCKD20000700A",
            "modelo": "Modelo Câmera IP",
            "data": "01112021"
        },
        {
            "ns": "BCKD20000700B",
            "modelo": "Modelo NVD",
            "data": "01042010"
        }

    ]


    
    return res.json(arr)

})

app.listen(port, () => {
    console.log('API no Heroku está ON')
})
