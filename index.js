const express = require("express");
const app = express();
const {searchManager,downloadManager} = require('ytmusic_api_unofficial')

app.get("/", (req, res) => {
  res.send("This is API for download any media from social networks");
});

// Instagram part
app.get("/instagram/", (req, res) => {
  const ig = require("ig-unduh");
  link = req.query.link;
  ig(link).then((result) => {
    res.json(result);
  });
});




app.get("/yt_music",(req,res)=> {
    q = req.query.q;
    searchManager.search(q, 'VIDEO').then((result) => {
        const id = result[0].id;
        const song_id = result[0].id;
        res.json({"url":"https://www.youtube.com/watch?v="+song_id})
)};

