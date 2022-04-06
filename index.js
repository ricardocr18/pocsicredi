const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {

    let numeroCPF = "58381533007"
    let login = "Theo"
    let numeroCNPJ = "8182433000010A"

    let arr = [
        {
            "cpf": "58381533007",
            "login": "Theodor Amstad",
            "saldo": "R$ XXXXXXXX"
            
        },
        {
            "cnpj": "81824330000101",
            "login": "Ayrton Senna",
            "saldo": "R$ YYYYYYYY"
        },
        {
            "cpf": "02514635080",
            "login": "Luke Skywalker",
            "saldo": "R$ ZZZZZZZZ"
        },
        {
            "cnpj": "93710809000198",
            "login": "Diego Maradona",
            "saldo": "R$ WWWWWWWW"  
        }
    ]

    if (arr.some(confirma => confirma.cpf === numeroCPF)) {
        cliente = arr.find(cliente => cliente.cpf === numeroCPF)
        msg = `Oi ${cliente.login}, segue seu saldo 😉`
        saldo = cliente.saldo
        aviso = "Qualquer dúvida a SICREDI está a disposição no tel.: (xx) xxxx-xxxx"
        
        console.log(msg)
        console.log(saldo)
        console.log(aviso)
    
    } else if (arr.some(confirma => confirma.cnpj === numeroCNPJ)) {
        cliente = arr.find(cliente => cliente.cnpj === numeroCNPJ)
        msg = `Oi ${cliente.login}, segue seu saldo 😉`
        saldo = cliente.saldo
        aviso = "Qualquer dúvida a SICREDI está a disposição no tel.: (xx) xxxx-xxxx"
        
        console.log(msg)
        console.log(saldo)
        console.log(aviso)
    
    
    } else {
        msg = `Não encontramos o seu cadastro ${login}  😔`
        saldo= ""
        aviso = "Por favor, fale com nossa central de atendimento tel.: (xx) xxxx-xxxx"
    
        console.log(msg)
        console.log(aviso)
    }

    let produto1 = "Get OK!!!"
    //let produto = arr.find(produto => produto.ns === numero)
    return res.json([msg, saldo, aviso])

})


app.listen(port, () => {
    console.log('API no Heroku está ON')
})
