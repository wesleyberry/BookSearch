const axios = require("axios");
const router = require("express").Router();
const db = require("../models");

const key = process.env.MY_API_KEY;

router.get("/books/:title", (req, res) => {
  var title = req.params.title.replace(/\s+/g, "+");
  console.log(`https://www.googleapis.com/books/v1/volumes?q=${title}&limit=20&key=${key}`);
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.title}&limit=20&key=${key}`)
    .then(({ data }) => {
      res.json(data); 
    })
    .catch(err => res.status(422).json(err));
});

router.post("/books", (req, res) => {
  db.Book.create(req.body).then(response => res.json(response))
  .catch(err => res.json(err));
});

router.get("/books", (req, res) => {
  db.Book.find({}).then(response => {
    res.json(response)})
  .catch(err => res.json(err));
});

router.delete("/books/:id", (req, res) => {
  var id = req.params.id;
  db.Book.deleteOne({_id:id}).then(response => {
    res.json(response)
  }).catch(err => res.json(res));
});

module.exports = router;
