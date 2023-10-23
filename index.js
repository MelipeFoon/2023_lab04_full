const express = require('express');
const app = express();
app.use(express.json());

let filmes = [
    {
        id: 1,
        nome: "Capitão America",
        imagemUrl: "https://br.web.img3.acsta.net/pictures/14/04/11/20/05/403364.jpg",
    },
    {
        id: 2,
        nome: "Capitã Marvel",
        imagemUrl: "https://br.web.img3.acsta.net/pictures/19/02/04/18/35/1468867.jpg",
    },
    {
        id: 3,
        nome: "O Senhor dos Anéis",
        imagemUrl: "https://br.web.img3.acsta.net/pictures/14/03/28/20/32/395879.jpg",
    }
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
    console.log(req.body.titulo);
    const filme = {
        id: filmes.length + 1,
        nome: req.body.nome,
        imagemUrl: req.body.imagemUrl
    }
    filmes.push(filme);
    res.send('Filme adicionado com sucesso');
});

app.listen(3000, () => console.log('aplicação up and running'));