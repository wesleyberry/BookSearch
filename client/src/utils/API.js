import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    searchAPI: function(query) {
        return axios.get("/api/books/" + query.title );
    },
    deleteBook: function(id) {
        console.log("Delete request at front-end" + id);
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};