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




app.get("/yt_music", (req, res) => {
    const q = req.query.q;
    searchManager.search(q, 'MUSIC').then((result) => {
      //console.log(result[0])
        const links = result.map(item => ({ url: "https://www.youtube.com/watch?v=" +item.id , title : item.title}));
        res.send(links);
    }).catch(err => {
        console.error("Error occurred while searching:", err);
        res.status(500).send("An error occurred while searching.");
    });
});

app.listen(3000);
