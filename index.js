const express = require("express");
const app = express();
const ig = require("ig-unduh");
const { searchManager } = require('ytmusic_api_unofficial');

app.get("/", (req, res) => {
  res.send("This is API for downloading media from social networks");
});

// Instagram route
app.get("/instagram/", (req, res) => {
  const ig = require("snapsave-downloader-itj");
  link = req.query.link;
  console.log(link);
  ig(link)
    .then((result) => {
      //res.text(result)
      
      res.json(result);
    })
    .catch((error) => {
      console.error("Error occurred while fetching Instagram data: ", link ,  error);
      res.status(500).json({ error: "An error occurred while fetching Instagram data" });
    });
});

// YouTube Music route
app.get("/yt_music", (req, res) => {
  const q = req.query.q;
  searchManager.search(q, 'MUSIC')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.error("Error occurred while searching YouTube Music:", error);
      res.status(500).json({ error: "An error occurred while searching YouTube Music" });
    });
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
