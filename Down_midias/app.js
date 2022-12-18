//npm i express
const express = require("express");
//npm i fs
const fs = require("fs");
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
    res.sendFile(`${__dirname}/index.html`);
    //nao sei porquê funcionou, mas carregou o css
    app.use('/Down_midias/public', express.static('public'));
    
    //exemplo

    // const { url } = req.query;
    //let date = Date.now();

    // cabeçalho meta dados 

    // res.header('Content-Disposition', `attachmentt; filename=Video${date}.mp4`)
    // return ytdl(url, { filter: "videoandaudio"}).pipe(res);    
    ytdl('https://www.youtube.com/shorts/LioK54DvSjo', {filter: "videoandaudio"}).pipe(fs.createWriteStream('Video.mp4'));
});



//iniciando o servidor 
app.listen(port, () => console.log(`*************\n\nhttp://localhost:${port}\n\n*************`));

