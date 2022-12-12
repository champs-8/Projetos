//npm i express
const express = require("express");
//instanciando a funcão express
const app = express();
//porta do servidor
const port = 3600;
//npm i cors
const cors = require("cors");
app.use(cors());


//ROTAS

//qual pagina quero abrir
app.get("/", (req, res) => {
    res.sendFile(__dirname + `/index.html`);
});
app.get("/download", (req, res) => {
    res.download(__dirname + `/public/texto.txt`);
});
//iniciando o servidor 
app.listen(port, () => console.log(`http://localhost:${port}`));