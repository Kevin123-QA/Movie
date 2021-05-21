const EXPRESS = require("express");
const route = EXPRESS.Router();
const movie = require("./models/movie");


// Create -X POST -H"Content-Type:application/json" localhost:6000/create
route.post("/create", async(req, res) => {
    const newEntry = new movie ({
        name: "Avengers",
        ageRestriction: 12,
        year: 2015,
        actor: ["RDJ",55],
        review: [85, "Rotten Tomatoes"]
    })
    await newEntry.save();
    res.send(newEntry);
})

// Get all curl http://localhost:6000/getAll
route.get("/getAll", async(req, res) => {
    const read = await movie.find();
    res.send(read);
})

// Get one curl http://localhost:6000/getOne/id
route.get("/getOne/:id", async(req, res) => {
    try {
        const mov = await movie.findById(req.params.id);
        res.send(mov);
    } catch {
        res.status(500).send("Movie does not exist");
    }
})

// Update -X POST -H"Content-Type:application/json" localhost:6000/update
route.post("/update/:id", async(req, res) => {
    try {
        const FIND = { _id: req.params.id };
        const update = { genre: "Comedy" };
        const mov = await movie.findOneAndUpdate(FIND, update, {
            returnOriginal: false
        })
        await mov.save();

        res.send(`${req.params.id} has been updated with new genre of ${update.genre}`);
    } catch {
        res.status(500).send("Movie does not exist");
    }
})

// Delete curl http://localhost:6000/delete/id
route.get("/delete/:id", async(req, res) => {
    try {
        const prod = await movie.findByIdAndDelete(req.params.id);
        res.send(prod);
    } catch {
        res.status(500).send("Movie does not exist");
    }
})

module.exports = route