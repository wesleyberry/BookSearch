const axios = require("axios");
const router = require("express").Router();
const key = "AIzaSyAmSheiRQHtlNIbW4O5--q4v1LsEXg7_xg";
console.log("outside apiRoutes");

router.get("/books/:title", (req, res) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${req.query}&limit=20&key=${key}`)
    .then(({ data }) => {
      console.log(data);
      res.json(data); 
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
