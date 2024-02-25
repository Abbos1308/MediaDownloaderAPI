const express = require("express");
const app = express();

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

// TikTok part
app.get("/tiktok/", (req, res) => {
  //link = req.query.link;
  res.send("It will be work in the future! :)")
});
app.listen(3000);

