//npm i express
import { express } from "express";
//npm i fs
const fs = require("fs");
//npm i ytdl-core
const ytdl = require('ytdl-core');
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
    app.use('/public', express.static('public'));
    
    //exemplo

    // const { url } = req.query;
    //let date = Date.now();

    // cabeçalho meta dados 

    // res.header('Content-Disposition', `attachmentt; filename=Video${date}.mp4`)
    // return ytdl(url, { filter: "videoandaudio"}).pipe(res);    
});
app.get('/script.js', (req, res) => {
    res.sendFile(`${__dirname}/script.js`);
    console.log('carregou o script');
})
app.get('/app.js', (req, res) => {
    res.sendFile(`${__dirname}/app.js`);
    console.log('carregou o app');
})

//iniciando o servidor 
app.listen(port, () => console.log(`*************\n\nhttp://localhost:${port}\n\n*************`));

// parte configuravel da API

