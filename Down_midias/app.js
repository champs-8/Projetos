//npm i express
const express = require("express");
//npm i ytdl-core
const ytdl = require('ytdl-core')
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
    const { url } = req.query;
    let date = Date.now();
    //cabeçalho meta dados 
    res.header('Content-Disposition', `attachmentt; filename=Video${date}.mp4`)
    return ytdl(url, { filter: "videoandaudio"}).pipe(res);
});
//iniciando o servidor 
app.listen(port, () => console.log(`http://localhost:${port}`));

