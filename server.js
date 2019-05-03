const express = require("express");
const path = require('path');
// require('dotenv').config();
const mongoose = require("mongoose");
const routes = require("./routes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join('build', 'index.html'));
    // });
}

app.use("/api", apiRoutes);
app.use("/api", routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebook");


app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});