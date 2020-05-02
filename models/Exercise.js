const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        trime: true
    },
    sets: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;