const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let filmes = [
    {

        // id: 1,
        nome: "Capitão America",
        sinopse: "Capitão America é um super heroi da Marvel",
        imagemUrl: "https://th.bing.com/th/id/R.b10bd495a4eaeb6c647cddb9b5de5696?rik=aI4P9LlvVuAVgw&riu=http%3a%2f%2fliseee.l.i.pic.centerblog.net%2fo%2f1b55c854.jpg&ehk=Pev5NBVqHlDh8l26EBpfNaXNn3vhOdXAQwQTk%2fEakmo%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        // id: 2,
        nome: "Capitã Marvel",
        sinopse: "Capitã Marvel é uma super heroina da Marvel",
        imagemUrl: "https://br.web.img3.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
    },
    {
        // id: 3,
        nome: "O Senhor dos Anéis",
        sinopse: "O Senhor dos Anéis é um filme de fantasia",
        imagemUrl: "https://br.web.img3.acsta.net/pictures/14/03/28/20/32/395879.jpg",
    },
]

//GET https://localhost:3000/filmes
app.get('/filmes', (req, res) => res.send(filmes));

//ponto de acesso para req get teste
app.get("/oi", (req, res) => res.send("oi"));

//GET https://localhost:3000/hey
app.get('/hey', (req, res) => {
    res.send('hey');
});

//GET https://localhost:3000/Corno
app.get('/Corno', (req, res) => {
    res.send('Corno');
});

//ponto de acesso para incluir um novo filme á lista de filmes
app.post('/filmes', (req, res) => {
    console.log(req.body.nome);
    const filme = {
        // id: filmes.length + 1,
        nome: req.body.nome,
        sinopse: req.body.sinopse
    }
    filmes.push(filme);
    // res.json(filmes)
    res.send(filmes);
});

app.listen(3000, () => console.log('aplicação up and running'));