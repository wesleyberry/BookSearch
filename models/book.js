const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    authors: [String],
    description: {type: String},
    image: {type: String},
    link: {type: String},
    saved: {type: Boolean}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;