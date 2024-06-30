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
app.get("/tiktok", (req, res) => {
  const link = req.query.link;
  const Tiktok = require("tiktokmediasaver")

  const tiktok_url = "https://www.tiktok.com/@defnite_ilm_2812/video/7362467772422425861?is_from_webapp=1&sender_device=mobile&sender_web_id=7384300034148582945"

  Tiktok.Downloader(tiktok_url, {
    version: "v2" //  version: "v1" | "v2" | "v3"
  }).then((result) => {
    res.json(result);
  })
});

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
