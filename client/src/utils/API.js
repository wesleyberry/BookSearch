import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    searchAPI: function(query) {
        console.log("Query in API.js:" + query.title);
        return axios.get("/api/books/" + query.title );
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
      // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      }
};