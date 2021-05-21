const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const APP = EXPRESS();

const router = require("./route");


MONGOOSE.connect("mongodb://localhost/movie", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        const APP = EXPRESS();
        APP.use(router);
        APP.listen(6000, () => {
            console.log("Server has started");
        })
    })