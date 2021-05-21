const express = require('express');
const Mongoose = require('mongoose');
const app = express();

const route = require("./route");


//setting up mongoose connection
Mongoose.connect("mongodb://localhost/movie", {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        app.use(express.json());
        app.use("/api",route);
        app.listen(6000, () => {
            if (err) console.log(err);
            console.log("Server has started"); // when connection is successful this message will appear in the log
        })

        .catch((err) => { 
            console.log("MongoDB Connection Failed!!!");
        });
    })