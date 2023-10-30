const protocolo = "http://";
const host = "localhost";
const port = "3000";
const endPoint = "/filmes";

async function obterFilmes() {
    const urlComplete = `${protocolo}${host}:${port}${endPoint}`;
    const filmes = (await axios.get(urlComplete)).data;
    // console.log(filmes);
    let tabela = document.querySelector(".filmes");
    let corpoTabela = tabela.getElementsByTagName("tbody")[0];
    for(filme of filmes){
        let linha = corpoTabela.insertRow(0);
        let celulaNome = linha.insertCell(0);
        let celulaSinopse = linha.insertCell(1);
        celulaNome.innerHTML = filme.nome;
        celulaSinopse.innerHTML = filme.sinopse;
        
    }
    // return filmes;
}  