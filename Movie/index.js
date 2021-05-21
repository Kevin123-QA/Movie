
const route = require("express").Router();
const movie = require("./models/movie");

//create
route.post("/add", async(req, res) => {
    const newEntry = {
        name: req.body.name,
        year: req.body.year,
        ageRestriction: req.body.ageRestriction,
        actor: req.body.actors,
        review: req.body.reviews

    }

    await newEntry.save();
    res.status(200).send("New Entry has been added"); 
})



