
const path = require('path');
const fs = require('fs');
const ytdl = require('ytdl-core');
//funcionou para pegar o ID
// import { url } from './script';
// import down from './script.js';
const url = 'https://www.youtube.com/watch?v=2rZmFz8fBVo'

const id = ytdl.getURLVideoID(url);
console.log(`ID do video: ${id}`);

const filepath = path.resolve(__dirname, 'info.json');

const infos = ytdl.getInfo(id).then(info => {
  console.log('title:', info.videoDetails.title);
  console.log('rating:', info.player_response.videoDetails.averageRating);
  console.log('uploaded by:', info.videoDetails.author.name);
  const json = JSON.stringify(info, null, 2)
    // eslint-disable-next-line max-len
    .replace(/(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');
  fs.writeFile(filepath, json, err2 => {
    if (err2) throw err2;
  });
});

module.exports = {infos};

