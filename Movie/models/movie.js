const mongoose = require('mongoose');
const schema = mongoose.Schema;

const actorSchema = new schema({
    fullName: {
        type: String,
        required: [true, "A name must be entered"],
        minlength: 2
    },
    age: {
        type: Number,
        min: 0,
        max: 100 
    }
});

const reviewSchema = new schema({
    rating: {
        type: Number,
        required: [true, "Must not be empty"],
        min: [0, "Cant be lower than 0"],
        max: [100, "Cant be higher than 100"]
    },
    reviewName: {
        type: String,
        required: [true, "Must state who reviewed"],
        minlength: 2
    }
});

const movieSchema = new schema({
             bsonType:"object",
           required: ["name","genre","ageRestriction"],
           properties:{
               name:{
                   bsonType:"string",
                   description:"Must be string and is required"
               },
               year:{
                   bsonType:"number",
                   minimum: 1900,
                   maximum: 3000,
                   description: "must be an integer in [1900, 3000] and is required"
               },
               ageRestriction:{
                   bsonType:"string",
                   description: " minimum age required to watch this movie"
               },
               actors:[actorSchema],
               reviews:[reviewSchema]

}});
       
module.exports = mongoose.model("Movie",movieSchema);