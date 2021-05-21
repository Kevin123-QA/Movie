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
            name:{
                   type:"string",
                   required: [true, "Must be string and is required"],
                   
               },
            year:{
                   type:"number",
                   minimum: 1900,
                   maximum: 3000,
                   required: [true, "must be an integer in [1900, 3000] and is required"]
               },
            ageRestriction:{
                   type:"string",
                   required: [true, "minimum age required to watch this movie"]
               },
               actors:[actorSchema],
               reviews:[reviewSchema]

});
       
module.exports = mongoose.model("Movie",movieSchema);